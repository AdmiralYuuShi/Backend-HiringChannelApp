const express = require('express')
const Route = express.Router()
const engineer = require('../controllers/engineer')
const auth = require('../configs/middleware')

Route
  .get('/', auth.isAuth, engineer.getEngineer)
  .get('/:id', auth.isAuth, engineer.getEngineerById)
  .post('/', auth.isAuth, auth.isEngineer, engineer.createEngineer)
  .put('/:id', auth.isAuth, auth.isEngineer, engineer.updateEngineer)
  .delete('/:id', auth.isAuth, auth.isEngineer, engineer.deleteEngineer)

module.exports = Route
