var express = require('express');
var router = express.Router();


// define the home page route
router.get('/', function (req, res) {
 
  res.status(200).send('Birds home page')
})
// define the about route
router.get('/Create', function (req, res) {
  var User = require('../models/student');
  // create a new user called chris
  var chris = new User({
    name: 'Chris',
    username: 'sevilayha',
    password: 'password'
  });


  // call the built-in save method to save to the database
  chris.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully!');
  });
  res.send('About birds')
})

module.exports = router
