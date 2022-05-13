const express = require('express')
const cors = require('cors')
const Model = require('./model')
const server = express();
server.use(cors())

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>BLOOMTECH HEROKU DEPLOYMENT</h1>')
})

server.get('/users', (req, res) => {
    Model.getUsers()
        .then(result => {
            res.json(result)
        })
})

server.get('/api/hello', (req, res) => {
    res.json({ message: 'api is working'})
})

server.post('/api/register', (req, res) => {
    Model.register()
})

server.post('/api/login', (req, res) => {
    Model.login()
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;