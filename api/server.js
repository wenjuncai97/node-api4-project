const express = require('express')
const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json());

server.use('/api', usersRouter)

server.get('/', (req, res) => {
    res.send('<h1>BLOOMTECH HEROKU DEPLOYMENT</h1>')
})

module.exports = server;