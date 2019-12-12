// Import Model
const uuid = require('uuid/v4')
const moment = require('moment')
const engineerModel = require('../models/engineer')
const date = moment()

module.exports = {
  getEngineer: (req, res) => {
    let condition
    let offset
    let row
    let pageNow
    let totalAllData
    let pageCount
    // Create Condition for Pagination
    if (req.query.page) {
      offset = (req.query.page - 1) * 5
      row = 5
    } else {
      offset = 0
      row = 5
    }

    // Search Engineer by name
    if (req.query.name) {
      condition = "WHERE name LIKE '%" + req.query.name + "%'"

      // Search Engineer by skill
    } else if (req.query.skill) {
      condition = "WHERE skill LIKE '%" + req.query.skill + "%'"
      // Sorting data
    } else if (req.query.sortBy) {
      // Sort data by name
      if (req.query.sortBy === 'name') {
        condition = 'ORDER BY name'
        // Sort data by skill
      } else if (req.query.sortBy === 'skill') {
        condition = 'ORDER BY skill'
        // Sort data by date_updated
      } else if (req.query.sortBy === 'date_updated') {
        condition = 'ORDER BY date_updated'
        // Wrong sort parameter
      } else {
        console.log('Cant sort data by ' + req.query.sortBy)
      }
    }

    if (req.query.page) {
      pageNow = req.query.page
    } else {
      pageNow = 1
    }

    engineerModel.getEngineerCount(condition)
      .then(result => {
        totalAllData = result[0].data_count
        pageCount = Math.ceil(result[0].data_count / 5)
      })

    engineerModel.getEngineer(offset, row, condition)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          page: pageNow,
          totalPage: pageCount,
          dataShowed: result.length,
          totalData: totalAllData,
          data: result,
          response: 'Data loaded'
        })
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get Engineer'
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
    const dateCreated = date.format('YYYY-MM-DD')
    const dateUpdated = date.format('YYYY-MM-DD')
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
        console.log(err)
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error Creating Data'
        })
      })
  },

  updateEngineer: (req, res) => {
    const { name, description, skill, location, email, phone, dateOfBirth, showcase } = req.body
    const dateUpdated = date.format('YYYY-MM-DD')
    const engineerId = req.params.id

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
        console.log(err)
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error updating data'
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
