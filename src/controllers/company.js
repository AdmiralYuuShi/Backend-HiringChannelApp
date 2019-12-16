const uuid = require('uuid/v4')
const upload = require('../configs/image_upload')
const companyModel = require('../models/company')
const moment = require('moment')
const date = moment()

module.exports = {
  getCompany: (req, res) => {
    companyModel.getCompany()
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: 'All data loaded'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get all Company',
          detail: err.message
        })
      })
  },

  createCompany: (req, res) => {
    const companyId = uuid()
    const logo = 'no-Image.png'
    const { name, location, description } = req.body
    const userId = req.headers.userid
    const dateCreated = date.format('YYYY-MM-DD h:mm:ss')
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    const data = { company_id: companyId, user_id: userId, name, logo, location, description, date_created: dateCreated, date_updated: dateUpdated }
    companyModel.createCompany(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          detail: result,
          message: 'Successfully create new data'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error create new data'
        })
      })
  },

  updateCompany: (req, res) => {
    const { name, location, description } = req.body
    const companyId = req.params.id
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    companyModel.updateCompany(name, location, description, dateUpdated, companyId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: 'Successfully update data'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error update data'
        })
      })
  },

  changeCompanyLogo: [upload.single('file'), (req, res) => {
    const fileName = req.file.filename
    const companyId = req.params.id
    companyModel.changeCompanyLogo(fileName, companyId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: 'Successfully update data'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error update data'
        })
      })
  }],

  deleteCompany: (req, res) => {
    const companyId = req.params.id
    companyModel.deleteCompany(companyId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: 'Successfully delete data with id : ' + companyId
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error delete data'
        })
      })
  }

// =============================
}
