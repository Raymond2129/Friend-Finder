//Dependencies
var express = require("express");
var path = require("path");

//connection port
var app = express();
var PORT = process.env.PORT || 3000;


//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//App port to listen on locally
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});