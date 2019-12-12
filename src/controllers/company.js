const uuid = require('uuid/v4')
const upload = require('../configs/image_upload')
const companyModel = require('../models/company')

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
        console.log(err)
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get all Company'
        })
      })
  },

  createCompany: (req, res) => {
    const companyId = uuid()
    const logo = 'no-Image.png'
    const { name, location, description } = req.body
    const data = {
      company_id: companyId,
      name,
      logo,
      location,
      description
    }
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
        console.log(err)
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
    companyModel.updateCompany(name, location, description, companyId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: 'Successfully update data'
        })
      })
      .catch(err => {
        console.log(err)
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
        console.log(err)
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
        console.log(err)
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error delete data'
        })
      })
  }

// =============================
}
