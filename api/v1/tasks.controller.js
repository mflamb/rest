'use strict';

const express = require('express');

module.exports = (app) => {

    const router = express.Router();

    router.get('/', (req, res) => {

        app.models.tasks
            .find()
            .then(docs => res.json(docs))
            .catch(e => res.error(e));
    });

    router.post('/', (req, res) => {

        const incoming = req.body;

        app.models.tasks
            .save(incoming)
            .then(doc => res.json(doc))
            .catch(e => res.error(e));
    });

    return router;
};