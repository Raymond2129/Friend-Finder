//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});



// //Dependencies
// var express = require("express");
// var path = require("path");
// var bodyParser = require("body-parser");

// //connection port
// var app = express();
// var PORT = process.env.PORT || 3000;


// //Routes
// require('./app/routing/api-Routes.js/index.js')(app);
// require('./app/routing/html-Routes.js/index.js')(app);


// // Add the application routes
// require('./app/routing/api-routes.js')(app); 
// require('./app/routing/html-routes.js')(app);
// //need to setup the express app to handle the data parsing
// app.use(bodyParser.json());
// app.use(express.static('app'));
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.text());
// //app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// //App port to listen on locally
// app.listen(PORT, function() {
//     console.log('App listening on PORT: ' + PORT);
// });