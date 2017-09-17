//1 get route with the url /api/friends this will be used to display a JSON of all possible friends.
//2 post route /api/friends. this will be used to handle incoming survey results. this route will also be used to handle the compatibility logicc
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var database = require('../data/friends.js');


router.route('/friends')
  .get(function(req, res){
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  })

  .post(function(req, res){

    checker(req.body,res);

  });

  function checker (data, res) {

    // console.log("User array " + data.scores);
    var user = data.scores;
    var results = [];
    // console.log(user);
    // console.log(database);
    for (var i = 0; i < database.length; i++){
      // console.log(database[i].scores);
      var count = 0;

      for (var j = 0; j < database[i].scores.length; j++){
        var a = parseInt(user[j]);
        var b = parseInt(database[i].scores[j]);
        console.log("User " + a);
        console.log("database " + b);
        console.log("----------------");
        var diff = difference(a,b);
        console.log("diff num " + diff);
        count += diff;
        console.log("-----------------");
        if(j == 9 ){
          // console.log(count);
          results.push({user: i, total: count});
          console.log(results);
        }
      }
    }


    var container = results.sort(function (a, b) {
      return a.total - b.total;
    });

    console.log(container);
    // console.log(results[0]);
    console.log("User's Index "+container[0].user);
    var user = container[0].user;
    console.log("User from database: " + database[user].name);
    console.log(database[user].photo);

    res.json(database[user]);


  }

  function difference (a, b) {
    return Math.abs(a-b);
  }


module.exports = router;
