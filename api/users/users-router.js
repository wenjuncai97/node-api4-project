const express = require('express')

const Model = require('../model')

const router = express.Router();

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
    Model.register({username: req.body.username, password: req.body.password})
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(err => {
            res.status(404).json({message: "error"})
        })
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