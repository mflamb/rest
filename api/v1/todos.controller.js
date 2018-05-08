'use strict';

const express = require('express');

module.exports = (app) => {

    const router = express.Router();

    /**
     *  @swagger
     *  /api/v1/tasks:
     *      get:
     *          description: Get collection of all tasks
     *          produces:
     *              - application/json
     *          responses:
     *              200:
     *                  description: tasks
     *                  schema:
     *                      type: array
     *                      items:
     *                          $ref: '#/definitions/Task'
     */
    router.get('/', (req, res) => {

        app.models.todos
            .find()
            .then((docs) => res.json(docs))
            .catch((error) => res.status(500).send(error));
    });

    /**
     *  @swagger
     *  /api/v1/tasks:
     *      post:
     *          description: Add a task
     *          produces:
     *              - application/json
     *          parameters:
     *              - in: body
     *                name: task
     *                schema:
     *                  $ref: '#/definitions/Task'
     *          responses:
     *              200:
     *                  description: tasks
     *                  schema:
     *                      type: object
     *                      items:
     *                          $ref: '#/definitions/Task'
     */
    router.post('/', (req, res) => {

        const todo = app.models.todos(req.body);

        todo
            .save()
            .then((doc) => res.json(doc))
            .catch((error) => res.status(500).send(error));
    });

    return router;
};
