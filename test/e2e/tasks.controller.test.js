'use strict';

require('dotenv').config();
process.env.LOG_ENABLED = false;

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../index.js').server;
const request = chai.request(server);

after(() => server.close());

describe('GET /tasks', () => {
    it('responds with JSON', (done) => {
        request
            .get('/api/v1/tasks')
            .then(res => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                done();
            })
            .catch(done);
    });

});
