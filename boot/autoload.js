'use strict';

const consign = require('consign');
const flatten = require('flat');
const logger = require('./logger');

module.exports = (server, connection) => {

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
        logger.debug(`mounting router at: ${route}`);
        server.use(route, router);
    });

    // Remove .model from the keys.
    // Needs to be updated if models are put into sub directories
    Object.entries(app.models).forEach(([modelKey, model]) => {
        app.models[modelKey.replace(/.model$/,'')] = model;
    });
};