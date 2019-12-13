
const JWT = require('jsonwebtoken')

module.exports = {
  isAuth: (req, res, next) => {
    try {
      const { authorization, email } = req.headers
      const userId = req.headers.userid
      if (!authorization || !email || !userId) {
        return res.status(404).json({
          status: 404,
          error: true,
          message: 'Unauthorized'
        })
      }

      const token = authorization.split(' ')[1]

      JWT.verify(token, process.env.SECRET, (err, decoded) => {
        if (err && err.name === 'JsonWebTokenError') {
          return res.status(403).json({
            status: 403,
            error: true,
            message: 'Invalid Token'
          })
        }
        if (err && err.name === 'TokenExpiredError') {
          return res.status(403).json({
            status: 403,
            error: true,
            message: 'Token Expired'
          })
        }
        if (email !== decoded.email || userId !== decoded.userId) {
          return res.status(403).json({
            status: 403,
            error: true,
            message: 'Your email or user id not match with token'
          })
        }
        return next()
      })
    } catch (err) {
      return res.status(401).json({
        status: 401,
        error: true,
        message: 'Token is Invalid'
      })
    }
  },

  isEngineer: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    JWT.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) throw err
      if (decoded.role === 'engineer' || decoded.role === 'admin') {
        next()
      } else {
        res.status(401).json({
          message: 'Only Engineer & Admin Allowed to Manage Data'
        })
      }
    })
  },

  isCompany: (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    JWT.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) throw err
      if (decoded.role === 'company' || decoded.role === 'admin') {
        next()
      } else {
        res.status(401).json({
          message: 'Only Company & Admin Allowed to Manage Data'
        })
      }
    })
  }

}
