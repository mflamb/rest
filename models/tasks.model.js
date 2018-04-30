'use strict';

const mongoose = require('mongoose');

module.exports = (app) => {

    app.services.logger.debug('Tasks Model Loaded');

    /**
     *  @swagger
     *  definitions:
     *      Task:
     *          type: object
     *          properties:
     *              title:
     *                  type: string
     *              done:
     *                  type: boolean
     */
    const tasksSchema = mongoose.Schema({
        title: String,
        done: {
            type: Boolean,
            default: false
        }
    });

    return app.connection.model('Tasks', tasksSchema);
};
