const conn = require('../configs/connection');

module.exports = {
  getCompany: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM company', (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },

  createCompany: (data) => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO company SET ?", data, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },

  updateCompany: (name, location, description, company_id) => {
    const sql = `UPDATE company SET name='${name}', location='${location}', description='${description}' WHERE company_id='${company_id}'`;
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },
  
  changeCompanyLogo: (file_name, company_id) => {
    const sql = "UPDATE company SET logo='"+ file_name +"' WHERE company_id='"+ company_id +"'";
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },
  
  deleteCompany: (company_id) => {
    const sql = "DELETE FROM company WHERE company_id='"+company_id+"'";
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    })
  }



}