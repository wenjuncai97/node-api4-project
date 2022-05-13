// const express = require('express')
// const Model = require('./model')
// const server = express();

// server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('<h1>BLOOMTECH HEROKU DEPLOYMENT</h1>')
// })

// server.get('/users', (req, res) => {
//     Model.getUsers()
//         .then(result => {
//             res.json(result)
//         })
// })

// server.post('/api/register', (req, res) => {
//     Model.register()
// })

// server.post('/api/login', (req, res) => {
//     Model.login()
// })