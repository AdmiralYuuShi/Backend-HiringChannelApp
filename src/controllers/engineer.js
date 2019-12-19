// Import Model
const uuid = require('uuid/v4')
const engineerModel = require('../models/engineer')
const miscHelper = require('../helpers/misc')
// const moment = require('moment')
// const date = moment()
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

module.exports = {
  // getEngineer: (req, res) => {
  //   const search = req.query.search ? req.query.search : ''
  //   const page = req.query.page ? req.query.page : 1
  //   const limit = req.query.limit ? req.query.limit : 5
  //   const sort = req.query.sort ? req.query.sort : 'ASC'
  //   const sortBy = req.query.sortBy ? req.query.sortBy : 'name'
  //   let allPage
  //   let allData
  //   const prevPage = parseInt(page) === 1 ? 1 : parseInt(page) - 1
  //   const nextPage = parseInt(page) === allPage ? allPage : parseInt(page) + 1

  //   engineerModel.getEngineerCount(search, page, limit, sort, sortBy)
  //     .then(result => {
  //       allData = result[0].data_count
  //       allPage = Math.ceil(result[0].data_count / limit)
  //     })

  //   engineerModel.getEngineer(search, page, limit, sort, sortBy)
  //     .then(result => {
  //       const pageDetail = {
  //         search,
  //         page,
  //         allPage,
  //         allData,
  //         limit,
  //         sort,
  //         sortBy,
  //         prevLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`,
  //         nextLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`
  //       }
  //       return miscHelper.responsePagination(res, 200, false, 'Success get data', pageDetail, result)
  //     })
  //     .catch(err => {
  //       res.status(400).json({
  //         status: 400,
  //         error: true,
  //         message: 'Error get Engineer',
  //         detail: err
  //       })
  //     })
  // },

  getEngineer: (req, res) => {

      let condition;
      let totalAllData;
      let pageCount;
      let pageNow;
      let offset;
      let row;
      const search = req.query.search
      const limit = req.query.limit
      const sortBy = req.query.sortBy
      const orderBy = req.query.orderBy


      // Create Condition for Pagination
      if(req.query.page){
        offset = (req.query.page - 1) * limit || 5;
        row = limit || 5;
      }else{
        offset = 0;
        row = limit || 5;
      }
    
      // Search Engineer
      if(search){
        condition = `WHERE (name LIKE '%${search}%' OR skill LIKE '%${search}%')`;
      // Sorting data
      }else if(sortBy){
        // Sort data by name
        if(sortBy == 'name'){
          if(orderBy){
            condition = `ORDER BY name ${orderBy}`;
          }else{
            condition = `ORDER BY name ASC`;
          }
          // Sort data by skill
        }else if(sortBy == 'skill'){
          if(orderBy){
            condition = `ORDER BY skill ${orderBy}`;
          }else{
            condition = `ORDER BY skill ASC`;
          }
          // Sort data by date_updated
        }else if(sortBy == 'date_updated'){
          if(orderBy){
            condition = `ORDER BY date_updated ${orderBy}`;
          }else{
            condition = `ORDER BY date_updated DESC`;
          }
        // Wrong sort parameter
        }else{
          console.log("Cant sort data by "+sortBy);
        }
        // Show all data 
      }
 
    if(req.query.page){
      pageNow = req.query.page;
    }else{
      pageNow = 1;
    }
    
    engineerModel.getEngineerCount(condition)
    .then(result => {
      totalAllData = result[0].data_count;
      pageCount = limit ? Math.ceil(result[0].data_count/limit) : Math.ceil(result[0].data_count/5);
    });
    
    const prevPage = pageNow === 1 ? '' : parseInt(pageNow) - 1
    const nextPage = pageNow === pageCount ? '' : parseInt(pageNow) + 1
    
    engineerModel.getEngineer(offset, row, condition)
    .then(result => {
      if(pageNow <= 1){res.status(200).json({
        status: 200,
        error: false,
        search,
        sortBy,
        orderBy,
        page: pageNow,
        allPage: pageCount,
        dataShowed: result.length,
        allData: totalAllData,
        limit : limit || 5,
        nextLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + pageNow, 'page=' + nextPage)}`,
        data: result,
        response: "Data loaded"
      });
      }else if(pageNow >= pageCount){
        res.status(200).json({
        status: 200,
        error: false,
        search,
        sortBy,
        page: pageNow,
        allPage: pageCount,
        dataShowed: result.length,
        allData: totalAllData,
        limit : limit || 5,
        prevLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + pageNow, 'page=' + prevPage)}`,
        data: result,
        response: "Data loaded"
      });
      }else{
        res.status(200).json({
        status: 200,
        error: false,
        search,
        sortBy,
        page: pageNow,
        allPage: pageCount,
        dataShowed: result.length,
        allData: totalAllData,
        limit : limit || 5,
        prevLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + pageNow, 'page=' + prevPage)}`,
        nextLink: `http://localhost:${process.env.PORT}${req.originalUrl.replace('page=' + pageNow, 'page=' + nextPage)}`,
        data: result,
        response: "Data loaded"
      });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error get Engineer'
      });
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
    const d = new Date()
    const userId = req.headers.userid
    const email = req.headers.email
    const engineerId = uuid()
    const dateCreated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    const dateUpdated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
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
    const d = new Date()
    const { name, description, skill, location, email, phone, dateOfBirth, showcase, expectedSalary } = req.body
    const dateUpdated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
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

    engineerModel.deleteEngineer(engineerId)
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
