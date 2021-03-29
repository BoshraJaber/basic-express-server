'use strict';

const express = require('express');
// Global Middleware
const logger = require('./middleware/loggers');
const validator = require('./middleware/validator.js');
//Errors Handlers
const notFoundHandler = require('./error-handler/404.js');
const errorHandler = require('./error-handler/500.js');

const app = express();
app.use(express.json());
app.use(logger);
app.use(validator);

app.use('/person', validator);
app.get('/error', (req, res) => {
  throw new error('Server Error ');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
  


module.exports = {
  app: app,
 // anonyms function that doesn't have a name
 start: (port)=>{
   const PORT = port || 5000;
   app.listen(PORT, ()=>console.log(`App is listening on port ${port}`))
 },
};
