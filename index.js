'use strict';

const express = require('express');
const app = express();
const pino = require('pino');
const logger = pino({
    level: 'debug'
});

const { version } = require('./package');

logger.info('starting app');
app.get('/version', (req, res) => {
    res.send({ version });
});
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

logger.info('listening at http://localhost:3333');
app.listen(3333);
