const express = require('express')

const Model = require('../model')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>BLOOMTECH HEROKU DEPLOYMENT</h1>')
})

router.get('/users', (req, res) => {
    Model.getUsers()
        .then(result => {
            res.json(result)
        })
})

router.get('/hello', (req, res) => {
    res.json({ message: 'api is working'})
})

router.post('/register', (req, res) => {
    Model.register()
})

router.post('/login', (req, res) => {
    Model.login()
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router;