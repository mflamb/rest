'use strict';

require('dotenv').config();
process.env.LOG_ENABLED = false;

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const sinon = require('sinon');

const { app, server } = require('../../index.js');
const request = chai.request(server);

after(() => server.close());

describe('GET /tasks', () => {
    it('calls app.models.Tasks.find()', (done) => {

        const stub = sinon.stub();
        app.models.tasks.find = stub;
        stub.resolves([]);

        request
            .get('/api/v1/tasks')
            .then(res => {
                stub.called.should.be.true;
                should.not.exist(stub.getCall(0).args[0]);
                done();
            })
            .catch(done);

    });
});