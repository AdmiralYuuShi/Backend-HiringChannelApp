const express = require('express')
const Route = express.Router()
const engineer = require('../controllers/engineer')
const auth = require('../configs/middleware')

Route
  .get('/', engineer.getEngineer)
  .get('/:id', engineer.getEngineerById)
  .get('/byUserId/:id', engineer.getEngineerByUserId)
  .post('/', auth.isAuth, auth.isEngineer, engineer.createEngineer)
  .put('/:id', auth.isAuth, auth.isEngineer, engineer.updateEngineer)
  .put('/changeProfilPicture/:id', engineer.changeProfilPicture)
  .delete('/:id', auth.isAuth, auth.isEngineer, engineer.deleteEngineer)

module.exports = Route
