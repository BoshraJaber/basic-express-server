'use strict';

const superTest = require('supertest');
const server = require('../server.js');
const request = superTest(server.app);

describe('Server', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/random');
    // console.log(response);
    expect(response.status).toEqual(404);
  });
  it('handle server errors', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
});