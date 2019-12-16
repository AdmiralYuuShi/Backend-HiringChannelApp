const uuid = require('uuid/v4')

module.exports = {
  responsePagination: (res, status, error, message, pageDetail, data) => {
    const resultPrint = {}

    resultPrint.id = uuid()
    resultPrint.status = status || 200
    resultPrint.error = error || false
    resultPrint.message = message || 'Success!'
    resultPrint.pageDetail = pageDetail
    resultPrint.data = data
    return res.status(resultPrint.status).json(resultPrint)
  }
}
