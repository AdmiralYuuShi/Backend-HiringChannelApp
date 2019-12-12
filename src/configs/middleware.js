  
const JWT = require('jsonwebtoken');

module.exports = {
  isAuth: (req,res,next) => {
    try {        
      
      const {authorization, email, user_id} = req.headers;
      
      if(!authorization || !email || !user_id){
        return res.status(404).json({
          message: 'Unauthorized'
        });
      }
          
      const token = authorization.split(' ')[1];    
          
      JWT.verify(token, process.env.SECRET, (err, decoded) => {
        if(err && err.name === 'JsonWebTokenError'){
          return res.status(403).json({
            status: 403,
            error: true,
            message: "Invalid Token" 
          });
        }
        if(err && err.name === 'TokenExpiredError'){
          return res.status(403).json({
            status: 403,
            error: true,
            message: 'Token Expired'
          });
        }
        if(email !== decoded.email || user_id !== decoded.user_id){
          return res.status(403).json({
            message: 'Your email or user id not match with token'
        });
      }
      return next();
    });

    } catch(err) {
      return res.status(401).json({
        message: 'Token is Invalid'
      });
    }
  },

  isEngineer: (req, res, next) =>{
    let token = req.headers.authorization.split(' ')[1];
    JWT.verify(token, process.env.SECRET, (err, decoded) => {
      if(decoded.role === 'engineer' || decoded.role === 'admin'){
        next();
      }else{
        res.status(401).json({
          message: "Only Engineer Allowed"
        });
      }
    });
  },

  isCompany: (req, res, next) =>{
    let token = req.headers.authorization.split(' ')[1];
    JWT.verify(token, process.env.SECRET, (err, decoded) => {
      if(decoded.role === 'company' || decoded.role === 'admin'){
        next();
      }else{
        res.status(401).json({
          message: "Only Company Allowed"
        });
      }
    });
  }

};