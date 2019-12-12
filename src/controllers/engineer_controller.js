// Import Model
const uuid = require('uuid/v4');
const moment = require('moment');
const engineerModel = require('../models/engineer_model');
const date = moment();

module.exports = {
  getEngineer: (req, res) => {

      let condition;

      // Create Condition for Pagination
      if(req.query.page){
        offset = (req.query.page - 1) * 5;
        row = 5;
      }else{
        offset = 0;
        row = 5;
      }
    
      // Search Engineer by name 
      if(req.query.name){
        condition = "WHERE name LIKE '%"+req.query.name+"%'";

      // Search Engineer by skill
      }else if(req.query.skill){
        condition = "WHERE skill LIKE '%"+req.query.skill+"%'";
      // Sorting data
      }else if(req.query.sortBy){
        // Sort data by name
        if(req.query.sortBy === 'name'){
          condition = "ORDER BY name";
          // Sort data by skill
        }else if(req.query.sortBy === 'skill'){
          condition = "ORDER BY skill";
          // Sort data by date_updated
        }else if(req.query.sortBy === 'date_updated'){
          condition = "ORDER BY date_updated";
        // Wrong sort parameter
        }else{
          console.log("Cant sort data by "+req.query.sortBy);
        }
      }
 
    if(req.query.page){
      page_now = req.query.page;
    }else{
      page_now = 1;
    }
    
    engineerModel.getEngineerCount(condition)
    .then(result => {
      total_all_data = result[0].data_count;
      page_count = Math.ceil(result[0].data_count/5);
    });

    engineerModel.getEngineer(offset, row, condition)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        page: page_now,
        total_page: page_count,
        data_showed: result.length,
        total_data: total_all_data,
        data: result,
        response: "Data loaded"
      });
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

  getEngineerById : (req, res) => {
    let engineerId = req.params.id;
    engineerModel.getEngineerById(engineerId)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        data_showed: result.length,
        data: result,
        response: "Data loaded"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error get Engineer by ID'
      });
    })
  },
  
  createEngineer :  (req, res) => {
    let engineer_id = uuid();
    let date_created = date.format('YYYY-MM-DD');
    let date_updated = date.format('YYYY-MM-DD');
    let {name, description, skill, location, date_of_birth, showcase, email, phone} = req.body;
    let data = {engineer_id, name, description, skill, location, date_of_birth, showcase, email, phone, date_created, date_updated};
    engineerModel.createEngineer(data)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        data: data,
        detail: result,
        response: "Data Successfully Created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error Creating Data'
      });
    })
  },
  
  updateEngineer : (req,res) => {

    let {name, description, skill, location, email, phone, date_of_birth, showcase} = req.body;
    let date_updated = date.format('YYYY-MM-DD');
    let engineer_id = req.params.id;

    
    engineerModel.updateEngineer(engineer_id, name, description, skill, location, date_of_birth, showcase, email, phone, date_updated)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        detail: result,
        response: "Data successfully updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error updating data'
      });
    })
  },

  deleteEngineer : (req, res) => {
    let engineer_id = req.params.id;

    engineerModel.updateEngineer(engineer_id)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        detail: result,
        response: "Successfully deleted data with id : "+engineer_id
      });
    })
    .catch(err => {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error deleting data'
      });
    })
  }
}