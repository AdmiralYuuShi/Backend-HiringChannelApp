const conn = require('../configs/connection')
// const bcrypt = require('bcryptjs')

module.exports = {

  register: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getPassword: (username) => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT password FROM user WHERE username='"+username+"'", (err, pass) => {
        if(!err){
          resolve(pass)
        }else(
          reject(new Error(err))
        )
      })
    })
  },

  getUser: async (username, password) => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT * FROM user WHERE username='" + username + "' AND password='" + password + "'", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
