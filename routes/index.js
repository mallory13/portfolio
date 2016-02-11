//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back
router.get('/mallory', function(req, res, next) {
  res.render('mallory', {myName: "Mallory", title:"Mallory"});
});

router.get('/donald', function(req, res, next) {
  res.render('donald', {myName: "Donald", title:"Donald"});
});

router.get('/patricia', function(req, res, next) {
  res.render('patricia', {myName: "Patricia", title:"Patricia"});
});

router.get('/nicolette', function(req, res, next) {
  res.render('nicolette', {myName: "Nicolette", title:"Nicolette"});
});

router.get('/miles', function(req, res, next) {
  res.render('miles', {myName: "Miles", title:"Miles"});
});





module.exports = router;
