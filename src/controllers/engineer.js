// Import Model
const uuid = require('uuid/v4')
const engineerModel = require('../models/engineer')
const miscHelper = require('../helpers/misc')
const moment = require('moment')
const date = moment()
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

module.exports = {
  getEngineer: (req, res) => {
    const search = req.query.search ? req.query.search : ''
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 5
    const sort = req.query.sort ? req.query.sort : 'ASC'
    const sortBy = req.query.sortBy ? req.query.sortBy : 'name'
    let allPage
    let allData
    const prevPage = parseInt(page) === 1 ? 1 : parseInt(page) - 1
    const nextPage = parseInt(page) === allPage ? allPage : parseInt(page) + 1

    engineerModel.getEngineerCount(search, page, limit, sort, sortBy)
      .then(result => {
        allData = result[0].data_count
        allPage = Math.ceil(result[0].data_count / limit)
      })

    engineerModel.getEngineer(search, page, limit, sort, sortBy)
      .then(result => {
        const pageDetail = {
          search,
          page,
          allPage,
          allData,
          limit,
          sort,
          sortBy,
          prevLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`,
          nextLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`
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
    const userId = req.headers.userid
    const email = req.headers.email
    const engineerId = uuid()
    const dateCreated = date.format('YYYY-MM-DD h:mm:ss')
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    const { name, description, skill, location, dateOfBirth, showcase, expectedSalary, phone } = req.body
    const data = { engineer_id: engineerId, user_id: userId, name, description, skill, location, date_of_birth: dateOfBirth, showcase, expected_salary: expectedSalary, email, phone, date_created: dateCreated, date_updated: dateUpdated }
    const checkEmail = regex.test(email)

    if (checkEmail === true) {
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
          if (err === 'ER_DUP_ENTRY') {
            res.status(400).json({
              status: 400,
              error: true,
              message: 'Error Duplicate Data',
              detail: err
            })
          } else {
            res.status(400).json({
              status: 400,
              error: true,
              message: 'Error Creating Data',
              detail: err.message
            })
          }
        })
    } else {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Email not valid'
      })
    }
  },

  updateEngineer: (req, res) => {
    const { name, description, skill, location, email, phone, dateOfBirth, showcase, expectedSalary } = req.body
    const dateUpdated = date.format('YYYY-MM-DD h:mm:ss')
    const engineerId = req.params.id
    const checkEmail = regex.test(email)

    if (checkEmail === true) {
      engineerModel.updateEngineer(engineerId, name, description, skill, location, dateOfBirth, showcase, expectedSalary, email, phone, dateUpdated)
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
    } else {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Email not valid'
      })
    }
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
