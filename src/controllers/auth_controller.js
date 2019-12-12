const userModel = require('../models/user_model');
const JWT = require('jsonwebtoken');
const uuid = require('uuid/v4');
// const bcrypt = require('bcryptjs')

module.exports = {

  register: (req, res) => {
    let {email, username, password, role} = req.body;
    // let password = bcrypt.hashSync(req.body.password, salt);
    let user_id = uuid();
    let data = {user_id, email, username, password, role};
    userModel.register(data)
    .then(result => {
      res.status(200).json({
        status: 200,
        error: false,
        data: data,
        detail: result,
        message: "Successfully Register New User"
      });
    })
    .catch(err => {
      res.status(400).json({
        status: 400,
        error: true,
        message: 'Error Register New User'
      });
    })
  },

  login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password; 

    userModel.getUser(username, password)
    .then(result => {
      result = result[0];
      if(result){

        const user_id = result.user_id;
        const email = result.email;
        const role = result.role;

        console.log(user_id, email);
        const token = JWT.sign({email, user_id, role}, process.env.SECRET, {expiresIn: '1h'})

        res.status(201).json({
          status:201,
          message: 'Success login',
          token,
          user: { email, user_id, role },
          detail: 'This token only valid for 1 hour'
        });
      }else{
        res.status(400).json({
          status: 400,
          error: true,
          message: "Username or Password incorect"
        });
      }
    })
    .catch(err => {
      res.status(400).json({
        status: 400,
        error: true,
        message: "Login Failed",
        detail: err
      });
    });
  }
}