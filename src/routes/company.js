const express = require('express');
const Route = express.Router();
const company_controller = require('../controllers/company_controller');
const auth = require('../configs/middleware')

Route
      .get('/', auth.isAuth, company_controller.getCompany)
      .post('/', auth.isAuth, auth.isCompany, company_controller.createCompany)
      .put('/:id', auth.isAuth, auth.isCompany, company_controller.updateCompany)
      .put('/changeLogo/:id', auth.isCompany, auth.isAuth, company_controller.changeCompanyLogo)
      .delete('/:id', auth.isAuth, auth.isCompany, company_controller.deleteCompany)

module.exports = Route;