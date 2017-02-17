var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogProject', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

// Models
var Blog = require('./models/Blog')
var User = require('./models/User')

// server
var express = require('express');
var bodyParser = require('body-parser')
var app = express()
console.log('Server is on port:8106')
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8100'); //LOCATION OF CLIENT APP
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.listen(8106)

app.get('/', function (req, res) {
  User.find(function (err, user) {
    if (err) return (err);
    res.json(user);
  })
})

app.post('/user', function (req, res) {
  User.create(req.body, function (err, post) {
    if (err) return (err);
    res.json(post)
  })
})
