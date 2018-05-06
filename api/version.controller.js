'use strict';

const express = require('express');
const { version } = require('../package');

module.exports = () => {

    const router = express.Router();

    router.get('/', (req, res) => {
        res.send({ version });
    });

    return router;
};
