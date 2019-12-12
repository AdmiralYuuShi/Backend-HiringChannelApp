const express = require('express')
const Route = express.Router()

const company = require('./routes/company')
const engineer = require('./routes/engineer')
const auth = require('./routes/auth')

Route
  .use('/company', company)
  .use('/engineer', engineer)
  .use('/user', auth)

module.exports = Route
