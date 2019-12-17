const mysql = require('mysql')
require('dotenv').config()

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})

conn.connect(err => {
  if (err) {
    console.log(`| Database Connection ${err}\n=====================================`)
  } else {
    console.log('| Database Successfully Connected   |\n===================================== \n  Press ctrl + C to stop!')
  }
})

module.exports = conn
