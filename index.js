'use strict';

require('dotenv').config();

const express = require('express');
const server = express();
const pino = require('pino')({
    level: 'debug'
});
const consign = require('consign');
const flatten = require('flat');

pino.info('starting app');

const app = {};

consign()
    .include('api')
    .into(app);

// console.log(api);
const flattened = flatten(app.api);
Object.entries(flattened).forEach(([route, router]) => {
    route = '/' + route.replace(/\.controller$/, '').replace(/\./g, '/');
    pino.debug(`mounting router at: ${route}`);
    server.use(route, router);
});


const httpServer = server.listen(process.env.PORT);
server.close = httpServer.close.bind(httpServer);

console.log(`Listening on port ${process.env.PORT}`);

module.exports = server;

