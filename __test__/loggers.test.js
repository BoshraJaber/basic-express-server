'use strict';
const superTest = require('supertest');
const logger = require('../src/middleware/loggers');

describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs output correctly', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith();
  });
});