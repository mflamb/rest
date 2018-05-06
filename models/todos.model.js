'use strict';

const mongoose = require('mongoose');

module.exports = (app) => {

    const tasksSchema = mongoose.Schema({
        done: {
            default: false,
            type: Boolean
        },
        title: String
    });

    return app.connection.model('Tasks', tasksSchema);
};
