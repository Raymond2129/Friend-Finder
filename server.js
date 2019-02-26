//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//connection port
var app = express();
var PORT = process.env.PORT || 3000;


//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//need to setup the express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//App port to listen on locally
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});