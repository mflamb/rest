'use strict';

const mongoose = require('mongoose');

module.exports = () => {
    const tasksSchema = mongoose.Schema({
        title: String,
        done: {
            type: Boolean,
            default: false
        }
    });

    return mongoose.model('Tasks', tasksSchema);
};