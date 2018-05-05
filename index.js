'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const helmet = require('helmet');
const pino = require('pino');
const logger = pino({
    level: process.env.LOG_LEVEL
});
const todosController = require('./api/v1/todos.controller');

const { version } = require('./package');

logger.info('starting app');
app.use(helmet());
app.get('/version', (req, res) => {
    res.send({ version });
});
app.use('/api/v1/todos', todosController());
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

logger.info(`listening at http://localhost:${process.env.PORT}`);
app.listen(process.env.PORT);
