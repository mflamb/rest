'use strict';

require('dotenv').config();

const consign = require('consign');
const express = require('express');
const flatten = require('flat');
const server = express();
const helmet = require('helmet');
const pino = require('pino');
const logger = pino({
    level: process.env.LOG_LEVEL
});

const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost/todos');

connection.then(
    () => logger.info('connected to Mongoose'),
    (error) => logger.error('Mongoose connection error', error)
);

logger.info('starting app');
server.use(helmet());

const app = {
    connection
};

consign()
    .include('models')
    .include('api')
    .into(app);

/**
 * Remove .model from the keys.
 * Needs to be updated if models are put into sub directories
 */
Object.entries(app.models).forEach(([modelKey, model]) => {
    app.models[modelKey.replace(/.model$/, '')] = model;
});

const flattened = flatten(app.api);

Object.entries(flattened).forEach(([route, router]) => {

    const baseRoute = `/api/${route.replace(/\.controller$/, '').replace(/\./g, '/')}`;

    logger.debug(`mounting router at: ${route}`);
    server.use(baseRoute, router);
});

server.get('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

logger.info(`listening at http://localhost:${process.env.PORT}`);
server.listen(process.env.PORT);
