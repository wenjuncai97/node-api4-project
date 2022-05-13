const express = require('express')
const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json());

server.use('/api', usersRouter)

module.exports = server;