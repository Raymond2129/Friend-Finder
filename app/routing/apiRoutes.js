// Your `apiRoutes.js` file should contain two routes:
var friendList = require('../data/friends.js');

module.exports = function(app) {
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function(req, res){
        res.json(friendList);
    });
    
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post('/api/friends', function (req, res) {
        //grab results of friends and compates them to the rest of the people in the array
        var newFriendResult = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
        //runs through all of the friends in the array
        for (i = 0; i < friendList.length; i++){
            var scoresDiff = 0;
            //run through scores to compare all people
            for (var j = 0; j < newFriendResult.length; j++) {
                scores += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendResult[j])));
            }
            //push results into the Array
            scoresArray.push(scoresDiff);
        }

        //Need to find the best match 
        var bestFriend = friendList[bestMatch];
        res.json(bestFriend);

        //push the results into the friendsList array
        friendList.push(req.body);
    });
};


