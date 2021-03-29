'use strict';

const express = require('express');
const app = express();



  


module.exports = {
  app: app,
 // anonyms function that doesn't have a name
 start: (port)=>{
   const PORT = port || 5000;
   app.listen(PORT, ()=>console.log(`App is listening on port ${port}`))
 },
};
