'use strict';
console.log('what why');
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Test errors', () => {
  it('handle invalid routes', async () => {
    // console.log('hellllllllllllllllllllloooooooooooo');
    const response = await request.get('/random');
    console.log(response);
    expect(response.status).toEqual(404);
    // expect(response.body.method).toEqual('GET');
  });
  it('handle server errors', async () => {
    console.log('hellllllllllllllllllllloooooooooooo');
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
});