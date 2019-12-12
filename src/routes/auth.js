const express = require('express')
const auth = require('../controllers/auth')
const Route = express.Router()

Route
  .post('/register', auth.register)
  .post('/login', auth.login)

module.exports = Route
