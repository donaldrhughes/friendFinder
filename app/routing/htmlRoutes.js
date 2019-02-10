//Dependencies
//=================================
var path = require("path");

//export app
module.exports = function (app) {
    
    //Routes
    //=========================================
    // default catch-all route

    app.get("/", function (req, res) {
     res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // survey route
    app.get("/survey", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};