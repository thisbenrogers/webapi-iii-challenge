const express = require('express');
const helmet = require('helmet');
const server = express();
const logger = require('./middleware/logger');
const userRouter = require('./middleware/validation');

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use('/', userRouter);

module.exports = server;
