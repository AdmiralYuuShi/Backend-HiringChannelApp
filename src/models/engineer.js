const conn = require('../configs/connection')

module.exports = {

  getEngineer: (search, page, limit, sort, sortBy) => {
    const offset = (page - 1) * limit
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM engineer WHERE (name LIKE '%${search}%' OR skill LIKE '%${search}%') ORDER BY ${sortBy} ${sort} LIMIT ${offset}, ${limit}`
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  
  getEngineerCount: (search, page, limit, sort, sortBy) => {
    return new Promise((resolve, reject) => {
      const offset = (page - 1) * limit
      const sql = `SELECT COUNT(*) AS data_count FROM engineer WHERE (name LIKE '%${search}%' OR skill LIKE '%${search}%') ORDER BY ${sortBy} ${sort} LIMIT ${offset}, ${limit}`
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

  updateEngineer: (engineerId, name, description, skill, location, dateOfBirth, showcase, email, phone, dateUpdated) => {
    return new Promise((resolve, reject) => {
      console.log(dateUpdated)
      console.log(phone)
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

}
