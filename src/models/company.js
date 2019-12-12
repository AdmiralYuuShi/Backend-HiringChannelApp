const conn = require('../configs/connection')

module.exports = {
  getCompany: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM company', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  createCompany: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateCompany: (name, location, description, companyId) => {
    const sql = `UPDATE company SET name='${name}', location='${location}', description='${description}' WHERE company_id='${companyId}'`
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  changeCompanyLogo: (fileName, companyId) => {
    const sql = "UPDATE company SET logo='" + fileName + "' WHERE company_id='" + companyId + "'"
    return new Promise((resolve, reject) => {
      conn.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteCompany: (companyId) => {
    const sql = "DELETE FROM company WHERE company_id='" + companyId + "'"
    return new Promise((resolve, reject) => {
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
