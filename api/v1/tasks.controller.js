'use strict';

const express = require('express');

module.exports = (app) => {

    app.services.logger.debug('Tasks Controller Loaded');

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

        app.models.tasks
            .find()
            .then(docs => res.json(docs))
            .catch(e => res.error(e));
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

        const incoming = req.body;

        const task = app.models.tasks(incoming);

        task
            .save(incoming)
            .then(doc => res.json(doc))
            .catch(e => res.error(e));
    });

    return router;
};