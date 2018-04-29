'use strict';

module.exports = require('pino')({
    enabled: ! (process.env.LOG_ENABLED === 'false'),
    level: process.env.LOG_LEVEL
});

