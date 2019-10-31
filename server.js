const express = require('express');

const logger = require('./middleware/logger');

const server = express();

server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" })
});

//custom middleware


module.exports = server;
