const userModel = require('../models/user')
const JWT = require('jsonwebtoken')
const uuid = require('uuid/v4')
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
// const bcrypt = require('bcryptjs')

module.exports = {

  register: (req, res) => {
    const { email, username, password, role } = req.body
    const userId = uuid()
    const data = { user_id: userId, email, username, password, role }
    const checkEmail = regex.test(email)

    if (checkEmail === true) {
      userModel.register(data)
        .then(result => {
          res.status(200).json({
            status: 200,
            error: false,
            data: data,
            detail: result,
            message: 'Successfully Register New User'
          })
        })
        .catch(err => {
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Error Register New User',
            detail: err
          })
        })
    } else {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Email not valid'
      })
    }
  },

  login: (req, res) => {
    const username = req.body.username
    const password = req.body.password

    userModel.getUser(username, password)
      .then(result => {
        result = result[0]
        if (result) {
          const userId = result.user_id
          const email = result.email
          const role = result.role

          const token = JWT.sign({ email, userId, role }, process.env.SECRET, { expiresIn: '1h' })

          res.status(201).json({
            status: 201,
            message: 'Success login',
            token,
            user: { email, userId, role },
            detail: 'This token only valid for 1 hour'
          })
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Username or Password incorect'
          })
        }
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Login Failed',
          detail: err
        })
      })
  }
}
