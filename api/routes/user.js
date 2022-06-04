const userController = require('../api/user')
const ROUTER = require('express').Router()


ROUTER.get('/users', userController.getAllUsers)

module.exports = ROUTER