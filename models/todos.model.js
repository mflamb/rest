'use strict';

const mongoose = require('mongoose');

module.exports = (app) => {

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
        done: {
            default: false,
            type: Boolean
        },
        title: String
    });

    return app.connection.model('Tasks', tasksSchema);
};
