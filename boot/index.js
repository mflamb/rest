'use strict';

require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('./logger');


logger.info('app booting');

const server = express();
server.use(bodyParser.json());
server.use(helmet());

require('./swagger')(server);

const connection = require('./db');
require('./autoload')(server, connection);

const httpServer = server.listen(process.env.PORT);
server.close = httpServer.close.bind(httpServer);

console.log(`Listening on port ${process.env.PORT}`);

// Expose server for tests
module.exports = server;
