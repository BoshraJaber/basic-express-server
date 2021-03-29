'use strict';
// const server = require('../server.js').app;
// app.use(express.json());
module.exports = (req, res, next) => {
    let keyName = req.query.name;
    // console.log('__QUERY__', name);
    if (typeof keyName !== 'string') {
    next('There is no name');
  } else {
    next();
  }
  };