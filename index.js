'use strict';

const express = require('express');
const app = express();

const { version } = require('./package');

console.log('starting app');
app.get('/version', (req, res) => {
    res.send({ version });
});
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});

console.log('listening at http://localhost:3333');
app.listen(3333);
