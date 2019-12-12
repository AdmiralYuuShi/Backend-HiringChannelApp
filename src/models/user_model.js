const conn = require('../configs/connection');
const bcrypt = require('bcryptjs');

module.exports = {

  register: (data) => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO user SET ?", data, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },


  
  getUser: async(username, password) => {
    // conn.query("SELECT password FROM user WHERE username='"+username+"'", (err, result) => {
    //   if(!err){
    //     hash = (result[0].password)
    //   }
    // });
    // console.log(hash);
    // hash_pass = bcrypt.compareSync(password, hash);
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM user WHERE username='"+username+"' AND password='"+password+"'", (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },
}