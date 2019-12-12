const express = require('express');
const bodyParser = require('body-parser');
const routerNav = require('./src/index');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Allowing CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1', routerNav);

app.listen(process.env.PORT, (err) => {
  if(err) throw err;
  console.log('===================================== \n| Server is running . . .           |');
});
