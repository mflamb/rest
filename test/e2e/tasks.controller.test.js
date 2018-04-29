'use strict';

require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../index.js');
const request = chai.request(app);

after(() => app.close());

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
