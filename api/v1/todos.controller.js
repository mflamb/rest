'use strict';

const express = require('express');

module.exports = (app) => {

    const router = express.Router();

    router.get('/', (req, res) => {

        app.models.todos
            .find()
            .then((docs) => res.json(docs))
            .catch((error) => res.status(500).send(error));
    });

    router.post('/', (req, res) => {

        const todo = app.models.todos(req.body);

        todo
            .save()
            .then((doc) => res.json(doc))
            .catch((error) => res.status(500).send(error));
    });

    return router;
};
