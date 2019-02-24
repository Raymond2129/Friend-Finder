// Your `htmlRoutes.js` file should include two routes:




//Dependencies
var path = require('path');

//Routing
module.exports = function(app){
 //    * A GET Route to `/survey` which should display the survey page.  
 app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
 }); 
 //    * A default, catch-all route that leads to `home.html` which displays the home page.
 app.use(function (req, res) {
     res.sendFile(path.join(__dirname + '/../public/home.html'));
 });
};