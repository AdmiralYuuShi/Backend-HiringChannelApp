const express = require('express');
const Route = express.Router();
const engineer_controller = require('../controllers/engineer_controller');
const auth = require('../configs/middleware')

Route
      .get('/', auth.isAuth, engineer_controller.getEngineer)
      .get('/:id', auth.isAuth, engineer_controller.getEngineerById)
      .post('/', auth.isAuth, auth.isEngineer, engineer_controller.createEngineer)
      .put('/:id', auth.isAuth, auth.isEngineer, engineer_controller.updateEngineer)
      .delete('/:id', auth.isAuth, auth.isEngineer, engineer_controller.deleteEngineer)

module.exports = Route; 