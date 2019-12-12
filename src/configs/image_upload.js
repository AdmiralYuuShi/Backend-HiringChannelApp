const multer = require('multer');
const moment = require('moment');

const date = moment();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/images');
  },
  filename: (req, file, cb) => {
    cb(null, date.format('YYYY-MM-DD') +'-'+ file.originalname);
  }
});

const filter = (req, file, cb) => {
  if(
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "images/gif"
  ){
    cb(null, true);
  }else{
    cb("File format should be PNG, JPG, JPEG or GIF", false);
  }
};

let upload = multer({storage: fileStorage, fileFilter: filter, limits: {fileSize: 6000000}});

module.exports = upload;