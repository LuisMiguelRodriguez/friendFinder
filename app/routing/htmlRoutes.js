// Should include two routes
//  get route to /survery
// serve as default home.html

var express = require('express');
var router = express.Router();
var path = require('path');

router.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

router.route('/survey')
  .get(function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

module.exports = router;
