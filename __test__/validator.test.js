'use strict';
const superTest = require('supertest');
const server = require('../src/server');
// const validator = require('../src/middleware/validator');
const request = superTest(server.app);

describe('Validator Test', () => {
  it('no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    // expect(response.text).toEqual('Hello World!');
  });
  it(' the name is in the query string', async () => {
    const response = await request.get('/person?name=boshra');
    expect(response.status).toEqual(200);
    // expect(response.text).toEqual('Hello World!');
    expect(response.body).toEqual({name: 'boshra'});
  });
});