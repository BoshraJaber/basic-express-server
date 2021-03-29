'use strict';

const express = require('express');
// Global Middleware
const logger = require('./middleware/loggers');
const validator = require('./middleware/validator');
//Errors Handlers
const notFoundHandler = require('./error-handler/404.js');
const errorHandler = require('./error-handler/500.js');

const app = express();
app.use(express.json());
// var router = express.Router();
app.use(logger); // global
// router.use(validator);

app.get('/person', validator, (req,res)=>{
  res.json({
    name: req.query.name,
  });
});
app.get('/error', (req, res) => {
  throw new Error('Server Error ');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
  


module.exports = {
  app: app,
  // anonyms function that doesn't have a name
  start: (port)=>{
    const PORT = port || 5000;
    app.listen(PORT, ()=>console.log(`App is listening on port ${port}`));
  },
};
