// Import Model
const uuid = require('uuid/v4');
const upload = require('../configs/image_upload');

const companyModel = require('../models/company_model');

module.exports = {
  getCompany: (req, res) => {
    companyModel.getCompany()
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        data: result,
        message: "All data loaded"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error get all Company'
      });
    })
  },

  createCompany: (req,res) => {
      let company_id = uuid();
      let logo = 'no-Image.png';
      let {name, location, description} = req.body;
      let data = {company_id, name, logo, location, description};
      companyModel.createCompany(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          detail: result,
          message: "Successfully create new data"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error create new data'
        });
      })
    },

    updateCompany : (req, res) => {
        let {name, location, description} = req.body;
        let company_id = req.params.id;
        companyModel.updateCompany(name, location, description, company_id)
        .then(result => {
          res.status(200).json({
            status: 200,
            error: false,
            data: result,
            message: "Successfully update data"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Error update data'
          });
        })
    },

    changeCompanyLogo: [upload.single('file'), (req, res) => {
      let file_name = req.file.filename;
      let company_id = req.params.id;
      companyModel.changeCompanyLogo(file_name, company_id)
        .then(result => {
          res.status(200).json({
            status: 200,
            error: false,
            data: result,
            message: "Successfully update data"
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Error update data'
          });
        })
    }],

    deleteCompany : (req, res) => {
      let company_id = req.params.id;
      companyModel.deleteCompany(company_id)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result,
          message: "Successfully delete data with id : "+company_id
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error delete data'
        });
      });
    }


// =============================
}
