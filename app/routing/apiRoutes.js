//Dependencies
//=================================
var path = require("path");
var dataObj = require("../data/friends")

//Routes
//=========================================


module.exports = function (app) {

  // survey route

  app.get("/api/friends", function (req, res) {
    
    res.json(dataObj);
    console.log(dataObj);

  });

  app.post("/api/friends", function (req, res) {

    friendsArr.push(req.body);
    // res.json(true);
    // }
    // else {
    //   data.push(req.body);
    //   res.json(false);
    // }
  });

}

