'use strict';

const logger = require('./logger');
const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost/todos');

connection.then(
    () => logger.info('connected to Mongoose'),
    (e) => logger.error('Mongoose connection error', e)
);

module.exports = connection;