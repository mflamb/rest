'use strict';

const express = require('express');

module.exports = (app) => {

    const router = express.Router();

    router.get('/', (req, res) => {

        app.models.tasks
            .find()
            .then(docs => {
                res.json(docs);
            });
    });

    return router;
};