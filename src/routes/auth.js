const express = require('express');
const auth_controller = require('../controllers/auth_controller');
const Route = express.Router();
const JWT = require('jsonwebtoken');

Route
  .post('/register', auth_controller.register)
  .post('/login', auth_controller.login)

module.exports = Route;