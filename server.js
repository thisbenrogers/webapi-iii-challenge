const express = require('express');

const logger = require('./middleware/logger');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');

const server = express();

server.use(logger);
server.use(express.json());

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" })
});

module.exports = server;
