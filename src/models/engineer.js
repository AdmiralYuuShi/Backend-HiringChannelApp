const conn = require('../configs/connection')

module.exports = {
  getEngineer: (offset, row, condition) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM engineer ' + condition + ' LIMIT ' + offset + ', ' + row
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getEngineerCount: (condition) => {
    console.log('count cond     ' + condition)
    return new Promise((resolve, reject) => {
      const sql = 'SELECT COUNT(*) AS data_count FROM engineer ' + condition
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getEngineerById: (engineerId) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM engineer WHERE engineer_id='" + engineerId + "'"
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createEngineer: (data) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO engineer SET ?'
      conn.query(sql, data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateEngineer: (engineerId, name, description, skill, location, dateOfBirth, showcase, dateUpdated) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE engineer SET name='${name}', description='${description}', skill='${skill}', location='${location}', date_of_birth='${dateOfBirth}', showcase='${showcase}', date_updated='${dateUpdated}' WHERE engineer_id='${engineerId}'`
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteEngineer: (engineerId) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM engineer WHERE engineer_id='" + engineerId + "'"
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }

  //= =====================
}
