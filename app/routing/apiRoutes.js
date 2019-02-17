//Dependencies
//=================================
var path = require("path");
var dataObj = require("../data/friends")
var Friend = require("../data/Friend");
var makeid = require("../data/makeid");
var makeScores = require("../data/makeScores");
var match;

//Routes
//=========================================

module.exports = function (app) {

  // survey route

  app.get("/api/friends", function (req, res) {

    res.json(dataObj);
    console.log(dataObj);

  });
  app.get("/api/match", function (req, res) {
    res.json(match);
    console.log(match);

  });


  app.post("/api/friends", function (req, res) {
    randomName = makeid();

    //insert the survey results into a contructor call
    var surveyFriend = new Friend(randomName, "#", req.body, Number(req.body.total));


    //set all the differences for each friends
    //no clue how to write a for / in loop to do this
    dataObj.friend0.diff = Math.abs(surveyFriend.totalScore - dataObj.friend0.totalScore);
    dataObj.friend1.diff = Math.abs(surveyFriend.totalScore - dataObj.friend1.totalScore);
    dataObj.friend2.diff = Math.abs(surveyFriend.totalScore - dataObj.friend2.totalScore);
    dataObj.friend3.diff = Math.abs(surveyFriend.totalScore - dataObj.friend3.totalScore);
    dataObj.friend4.diff = Math.abs(surveyFriend.totalScore - dataObj.friend4.totalScore);
    dataObj.friend5.diff = Math.abs(surveyFriend.totalScore - dataObj.friend5.totalScore);
    dataObj.friend6.diff = Math.abs(surveyFriend.totalScore - dataObj.friend6.totalScore);
    dataObj.friend7.diff = Math.abs(surveyFriend.totalScore - dataObj.friend7.totalScore);
    dataObj.friend8.diff = Math.abs(surveyFriend.totalScore - dataObj.friend8.totalScore);
    dataObj.friend9.diff = Math.abs(surveyFriend.totalScore - dataObj.friend9.totalScore);


    console.log(dataObj)

    // find the value with the lowest difference
    var lowestDiff = Math.min(dataObj.friend0.diff, dataObj.friend1.diff, dataObj.friend2.diff, dataObj.friend3.diff, dataObj.friend4.diff, dataObj.friend5.diff, dataObj.friend6.diff, dataObj.friend7.diff, dataObj.friend8.diff, dataObj.friend9.diff)
    
    //match the lowest difference value with the friend's name
    if (lowestDiff === dataObj.friend0.diff) {
      console.log(dataObj.friend0.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend0.diff) {
      console.log(dataObj.friend0.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend1.diff) {
      console.log(dataObj.friend1.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend2.diff) {
      console.log(dataObj.friend2.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend3.diff) {
      console.log(dataObj.friend3.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend4.diff) {
      console.log(dataObj.friend4.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend5.diff) {
      console.log(dataObj.friend5.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend6.diff) {
      console.log(dataObj.friend6.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend7.diff) {
      console.log(dataObj.friend7.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend8.diff) {
      console.log(dataObj.friend8.name);
      match = dataObj.friend0.name;
    }
    else if (lowestDiff === dataObj.friend9.diff) {
      console.log(dataObj.friend9.name);
      match = dataObj.friend0.name;
    }
    else {
      console.log("Error: No Matches");
    }
    
  });

  


}
//function that gets the sum of the Friends scores
function getSum(total, num) {
  return total + num;
};
