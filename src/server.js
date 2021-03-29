'use strict';

const express = require('express');
const logger = require('./middleware/loggers');
const validator = require('./middleware/validator.js');

const app = express();
app.use(express.json());
app.use(logger);
app.use(validator);


// app.get('/person', (req, res,next) => {
//   let name = req.query.name;
//   console.log('__QUERY__', req.query);
//     if (typeof name !== 'string') {
//     next('There is no name');
//   } else {
//     res.json({
//     name: name,
//     });
//   }  
// });

app.use('/person', validator)
  


module.exports = {
  app: app,
 // anonyms function that doesn't have a name
 start: (port)=>{
   const PORT = port || 5000;
   app.listen(PORT, ()=>console.log(`App is listening on port ${port}`))
 },
};
