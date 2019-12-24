const conn = require('../configs/connection')

module.exports = {

  // getEngineer: (search, page, limit, sort, sortBy) => {
  //   const offset = (page - 1) * limit
  //   return new Promise((resolve, reject) => {
  //     const sql = `SELECT * FROM engineer WHERE (name LIKE '%${search}%' OR skill LIKE '%${search}%') ORDER BY ${sortBy} ${sort} LIMIT ${offset}, ${limit}`
  //     conn.query(sql, (err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },

  // getEngineerCount: (search, page, limit, sort, sortBy) => {
  //   return new Promise((resolve, reject) => {
  //     const offset = (page - 1) * limit
  //     const sql = `SELECT COUNT(*) AS data_count FROM engineer WHERE (name LIKE '%${search}%' OR skill LIKE '%${search}%') ORDER BY ${sortBy} ${sort} LIMIT ${offset}, ${limit}`
  //     conn.query(sql, (err, result) => {
  //       if (!err) {
  //         resolve(result)
  //       } else {
  //         reject(new Error(err))
  //       }
  //     })
  //   })
  // },
    getEngineer: (offset, row, condition, condition2) => {
    return new Promise((resolve, reject) => {
      sql =  "SELECT * FROM engineer "+condition+' '+condition2+" LIMIT "+offset+", "+row;
      conn.query(sql, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
  },

  getEngineerCount: (condition) => {
    return new Promise((resolve, reject) => {
      sql = "SELECT COUNT(*) AS data_count FROM engineer "+condition;
      conn.query(sql, (err, result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      });
    });
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

  getEngineerByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM engineer WHERE user_id='" + userId + "'"
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
// ec2-3-89-6-157.compute-1.amazonaws.com
  changeProfilePicture: (fileName, engineerId) => {
    const sql = "UPDATE engineer SET profil_picture='" + fileName + "' WHERE engineer_id='" + engineerId + "'"
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

  updateEngineer: (engineerId, name, description, skill, location, dateOfBirth, showcase, expectedSalary, email, phone, dateUpdated) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE engineer SET name='${name}', description='${description}', skill='${skill}', location='${location}', date_of_birth='${dateOfBirth}', showcase='${showcase}', expected_salary='${expectedSalary}', email='${email}', phone='${phone}', date_updated='${dateUpdated}' WHERE engineer_id='${engineerId}'`

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
