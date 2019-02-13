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
    fri = new Friend(randomName, "#", req.body);
    console.log(fri.randomRes);
// for(var i = 10; i > 0; i++){
// if(fri.ques[i] === 1000){
//   fri.ques[i].randomRes = randomScore[i];
// }

// }

    

    console.log(fri.name);
    // friendsArr.push(req.body);
    // res.json(true);
    // }
    // else {
    //   data.push(req.body);
    //   res.json(false);
    // }
  });

}

