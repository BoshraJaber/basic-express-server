'use strict';

require('dotenv').config();
// instead of const server then server.start
require('./src/server.js').start(process.env.PORT);