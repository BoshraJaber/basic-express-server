'use strict';
const superTest = require('supertest');
const validator = require('../src/middleware/validator');
const request = superTest(validator);

describe('Server', () => {
    it('handle working routes', async () => {
      const response = await request.get('/person');
      console.log(response);
      expect(response.status).toEqual(200);
      // expect(response.text).toEqual('Hello World!');
    });
  });