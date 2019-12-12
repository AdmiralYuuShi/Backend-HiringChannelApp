const userModel = require('../models/user')
const JWT = require('jsonwebtoken')
const uuid = require('uuid/v4')
// const bcrypt = require('bcryptjs')

module.exports = {

  register: (req, res) => {
    const { email, username, password, role } = req.body
    // let password = bcrypt.hashSync(req.body.password, salt);
    const userId = uuid()
    const data = {
      user_id: userId,
      email,
      username,
      password,
      role
    }
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
