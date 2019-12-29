const express = require('express')
const Route = express.Router()
const company = require('../controllers/company')
const auth = require('../configs/middleware')

Route
  .get('/', company.getCompany)
  .get('/:id', company.getCompanyById)
  .get('/byUserId/:id', company.getCompanyByUserId)
  .post('/', auth.isAuth, auth.isCompany, company.createCompany)
  .put('/:id', auth.isAuth, auth.isCompany, company.updateCompany)
  .put('/changeLogo/:id', auth.isCompany, auth.isAuth, company.changeCompanyLogo)
  .delete('/:id', auth.isAuth, auth.isCompany, company.deleteCompany)

module.exports = Route
