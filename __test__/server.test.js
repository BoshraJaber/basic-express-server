'use strict';
console.log('what why');
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Test errors', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/random');
    console.log(response.method);
    expect(response.status).toEqual(404);
    // expect(response.method).toEqual('null');
  });
  it('handle server errors', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
});