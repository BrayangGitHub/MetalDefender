// load module express
const express = require('express'),
db = require('./models/connectdb');
// tao 1 instances cua express
const app = express()
// middleWare 
// router 
var routes = require('./routes/routes')
app.use('/', routes);
// start server 
app.listen(3000, function () {
  
  console.log('Example app listening on port 3000!')
})
