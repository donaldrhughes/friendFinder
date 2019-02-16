//Dependencies
//=================================
var path = require("path");
var dataObj = require("../data/friends")
var Friend = require("../data/Friend");
var makeid = require("../data/makeid");
var makeScores = require("../data/makeScores");

//Routes
//=========================================


module.exports = function (app) {

  // survey route

  app.get("/api/friends", function (req, res) {

    res.json(dataObj);
    console.log(dataObj);

  });

  app.post("/api/friends", function (req, res) {
   
    randomName = makeid();
    randomScore = makeScores();
    fri = new Friend(randomName, "#", req.body, totalScore);
fri.totalScore = 31;
  if(fri.totalScore === (dataObj.friend0).totalScore){
    console.log("exact");
   } else {
     console.log("not exact");
   }
  

    
    console.log(fri.randomRes);

    console.log(fri.name);

  });

}

