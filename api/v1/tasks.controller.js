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
     *          produced:
     *              - application/json
     *          parameters:
     *              - name: title
     *              - name: done
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

        app.models.tasks
            .save(incoming)
            .then(doc => res.json(doc))
            .catch(e => res.error(e));
    });

    return router;
};