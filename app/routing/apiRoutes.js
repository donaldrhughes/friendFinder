//Dependencies
//=================================
var path = require("path");
var friendsArr = require("../data/friends")

//Routes
//=========================================


module.exports = function(app) {

 // survey route

 app.get("/api/friends", function (req, res) {
    res.json(friendsArr);

})

app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (friendsArr.length < 5) {
      friendsArr.push(req.body);
      res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

}

