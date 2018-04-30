'use strict';

const pino = require('pino');
const logger = pino({
    enabled: ! (process.env.LOG_ENABLED === 'false'),
    level: process.env.LOG_LEVEL
});

module.exports = (app) => {
    app && logger.debug('Loger loaded at: app.services.logger');
    return logger;
};

