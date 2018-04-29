'use strict';

require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const server = express();
const pino = require('pino')({
    level: 'debug'
});
const consign = require('consign');
const flatten = require('flat');

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost/todos');

connection.then(
        () => pino.info('connected to Mongoose'),
        (e) => pino.error('Mongoose connection error', e)
    );

server.use(helmet());
pino.info('starting app');

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Todo API', // Title (required)
            version: '0.0.0', // Version (required)
        },
    },
    apis: ['./models/**/*.model.js', './api/**/*.controller.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

server.get('/api/api-docs.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const swaggerUi = require('swagger-ui-express');
server.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const app = {
    connection
};

consign()
    .include('models')
    .include('api')
    .into(app);

// Add controllers to the server
const flattened = flatten(app.api);
Object.entries(flattened).forEach(([route, router]) => {
    route = '/api/' + route.replace(/\.controller$/, '').replace(/\./g, '/');
    pino.debug(`mounting router at: ${route}`);
    server.use(route, router);
});

// Remove .model from the keys.
// Needs to be updated if models are put into sub directories
Object.entries(app.models).forEach(([modelKey, model]) => {
    app.models[modelKey.replace(/.model$/,'')] = model;
});

const httpServer = server.listen(process.env.PORT);
server.close = httpServer.close.bind(httpServer);

console.log(`Listening on port ${process.env.PORT}`);

// Expose server for tests
module.exports = server;
