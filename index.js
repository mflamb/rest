'use strict';

require('dotenv').config()

const express = require('express');
const app = express();
const pino = require('pino')();

pino.info('starting app');
app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);

module.exports = app;

