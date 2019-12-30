const userModel = require('../models/user')
const JWT = require('jsonwebtoken')
const uuid = require('uuid/v4')
// const moment = require('moment')
// const date = moment()
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const bcrypt = require('bcryptjs')
const saltRounds = 10

module.exports = {

  register: (req, res) => {
    const d = new Date()
    const { email, username, role } = req.body
    const userId = uuid()
    const dateCreated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    const dateUpdated = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
    const salt = bcrypt.genSaltSync(saltRounds)
    const password = bcrypt.hashSync(req.body.password, salt)
    const data = { user_id: userId, email, username, password, role, date_created: dateCreated, date_updated: dateUpdated }
    const checkEmail = regex.test(email)

    if (checkEmail === true) {
      userModel.register(data)
        .then(result => {
          res.status(200).json({
            status: 200,
            error: false,
            data: {
                    user_id: userId, 
                    email, 
                    username,
                    role, 
                    date_created: dateCreated, 
                    date_updated: dateUpdated
                  },
            detail: result,
            message: 'Successfully Register New User'
          })
        })
        .catch(err => {
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Email is already registered',
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

    userModel.getPassword(username)
      .then(result => {
        const hash = result[0].password
        const checkPass = bcrypt.compareSync(password, hash)
        if (checkPass === true) {
          userModel.getUser(username, hash)
            .then(result => {
              result = result[0]
              if (result) {
                const userId = result.user_id
                const email = result.email
                const role = result.role
                const username = result.username

                const token = JWT.sign({ email, userId, role }, process.env.SECRET, { expiresIn: '1h' })

                res.status(201).json({
                  status: 201,
                  message: 'Success login',
                  token,
                  user: { username, email, userId, role },
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
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: 'Wrong Password'
          })
        }
      })
      .catch(err => {
        res.status(404).json({
          status: 404,
          error: true,
          message: 'Account not found'
        })
      })
  },

  // getUserById : (req, res) => {
  //   userModel.getUserById(req.body.userId)
  //   .then(result => {
  //     res.status(200).json({
  //       status: 200,
  //       error: false,
  //       data: result
  //     })
  //   })
  //   .catch(err => {
  //     res.status(404).json({
  //       status: 404,
  //       error: true,
  //       message: 'Account not found'
  //     })
  //   })
  // }
}
