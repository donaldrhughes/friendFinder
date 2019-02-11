//Friend Finder Server Start (Main)
//=========================================

//Dependencies
//=================================
var express = require('express');
var path = require('path');
// Sets up the Express App
var app = express();
//dynamic port assign
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// ================================================================================

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
})


