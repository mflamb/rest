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
            .catch(sendError(res));
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
            .catch(sendError(res));
    });

    /**
     *  @swagger
     *  /api/v1/tasks/{id}:
     *      delete:
     *          description: Delete a task by id
     *          parameters:
     *              - in: path
     *                name: id
     *                schema:
     *                  type: string
     */
    router.delete('/:id', (req, res) => {
        console.log('about to delete', req.params.id);
        app.models.tasks.findByIdAndRemove(req.params.id)
            .then(doc => {
                console.log('deleted', doc);
                res.json(doc)
            })
            .catch(sendError(res));
    });

    return router;
};

function sendError(res) {
    return error => {
        res.status(500);
        res.send(error);
    }
}