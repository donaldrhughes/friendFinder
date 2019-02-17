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

  function getSum(total, num) {
    return total + num;
  };

  app.post("/api/friends", function (req, res) {
    // Total Difference example: 2 + 1 + 2 = 5

    // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
    // The closest match will be the user with the least amount of difference.*/

    randomName = makeid();

    //insert the survey results into a contructor call
    var surveyFriend = new Friend(randomName, "#", req.body, Number(req.body.total));
    console.log(surveyFriend.totalScore)
    console.log(dataObj.friend9.totalScore);

    //Conditional Statement Frame
    if (surveyFriend.totalScore === dataObj.friend9.totalScore) {
      console.log(dataObj.friend9.name + "is an exact match");
    } else {
      console.log("not exact");
    }
  });

}


