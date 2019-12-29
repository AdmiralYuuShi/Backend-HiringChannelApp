const uuid = require('uuid/v4')
const upload = require('../configs/image_upload')
const companyModel = require('../models/company')
// const moment = require('moment')
// const date = moment()

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
          message: 'Error get data',
          detail: err.message
        })
      })
  },

  getCompanyById: (req, res) => {
    companyModel.getCompanyById(req.params.id)
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
          message: 'Error get data',
          detail: err.message
        })
      })
  },

  getCompanyByUserId: (req, res) => {
    companyModel.getCompanyByUserId(req.params.id)
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
          message: 'Error get data',
          detail: err.message
        })
      })
  },

  createCompany: (req, res) => {
    const d = new Date()
    const companyId = uuid()
    const logo = 'new-company.png'
    const { name, location, description } = req.body
    const userId = req.headers.userid
    const dateCreated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    const dateUpdated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
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
    const d = new Date()
    const { name, location, description } = req.body
    const companyId = req.params.id
    const dateUpdated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
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
