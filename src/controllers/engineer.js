// Import Model
const uuid = require('uuid/v4')
const moment = require('moment')
const engineerModel = require('../models/engineer')
const date = moment()
const miscHelper = require('../helpers/misc')

module.exports = {
  getEngineer: (req, res) => {
    
    const search = req.query.search ? req.query.search : ''
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 5
    const sort = req.query.sort ? req.query.sort : 'ASC'
    const sortBy = req.query.sortBy ? req.query.sortBy : 'name'
    let allPage;
    let allData;
    const prevPage = parseInt(page) === 1 ? 1 : parseInt(page) - 1
    const nextPage = parseInt(page) === allPage ? allPage : parseInt(page) + 1
    
    engineerModel.getEngineerCount(search, page, limit, sort, sortBy)
    .then(result => {
      allData = result[0].data_count
      allPage = Math.ceil(result[0].data_count / limit)
    })

    engineerModel.getEngineer(search, page, limit, sort, sortBy)
    .then(result => {
        let pageDetail = {
          search,
          page,
          allPage,
          allData,
          limit,
          sort,
          sortBy,
          prevLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' +  prevPage)}`,
          nextLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' +  nextPage)}`,
        }
        return miscHelper.responsePagination(res, 200, false, 'Success get data', pageDetail, result)
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get Engineer',
          detail: err
        })
      })
  },

  getEngineerById: (req, res) => {
    const engineerId = req.params.id
    engineerModel.getEngineerById(engineerId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          dataShowed: result.length,
          data: result,
          response: 'Data loaded'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get Engineer by ID',
          detail: err
        })
      })
  },

  createEngineer: (req, res) => {
    const engineerId = uuid()
    const dateCreated = date.format('YYYY-MM-DD h:mm:ss')
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    const { name, description, skill, location, dateOfBirth, showcase, email, phone } = req.body
    const data = { engineer_id: engineerId, name, description, skill, location, date_of_birth: dateOfBirth, showcase, email, phone, date_created: dateCreated, date_updated: dateUpdated }
    engineerModel.createEngineer(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: data,
          detail: result,
          response: 'Data Successfully Created'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error Creating Data',
          detail: err
        })
      })
  },

  updateEngineer: (req, res) => {
    const { name, description, skill, location, email, phone, dateOfBirth, showcase } = req.body
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    const engineerId = req.params.id
    console.log(name)

    engineerModel.updateEngineer(engineerId, name, description, skill, location, dateOfBirth, showcase, email, phone, dateUpdated)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          detail: result,
          response: 'Data successfully updated'
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error updating data',
          detail: err
        })
      })
  },

  deleteEngineer: (req, res) => {
    const engineerId = req.params.id

    engineerModel.updateEngineer(engineerId)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          detail: result,
          response: 'Successfully deleted data with id : ' + engineerId
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error deleting data',
          detail: err
        })
      })
  }
}
