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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos')
    .then(
        () => pino.info('connected to Mongoose'),
        (e) => pino.error('Mongoose connection error', e)
    );

server.use(helmet());
pino.info('starting app');

const app = {};

consign()
    .include('models')
    .include('api')
    .into(app);

// Add controllers to the server
const flattened = flatten(app.api);
Object.entries(flattened).forEach(([route, router]) => {
    route = '/' + route.replace(/\.controller$/, '').replace(/\./g, '/');
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
