'use strict';

const mongoose = require('mongoose');

module.exports = (app) => {
    const tasksSchema = mongoose.Schema({
        title: String,
        done: {
            type: Boolean,
            default: false
        }
    });

    return app.connection.model('Tasks', tasksSchema);
};
