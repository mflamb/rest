'use strict';

require('dotenv').config();

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const request = require('supertest');

const app = require('../index.js');

chai.use(chaiHttp);

describe('GET /tasks', () => {
    it('responds with JSON', (done) => {
        chai.request(app)
            .get('/tasks')
            .then(res => {
                res.should.have.status(200);
                done();
            })
            .catch(done);
    });
});
