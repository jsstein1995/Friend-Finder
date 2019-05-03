var path = require('path');
var friends = require("../data/friends.js");
// var Joi = require('joi');

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newPerson = req.body;
        var newScores = newPerson.scores;
        //Create Variables for match name and image
        var match
        var matchName = "";
        var matchImage = "";
        var latestMatchScore = 20;
        //console.log(friends[0].scores);
        //console.log(newScores)
        //Loop through all the friends and find the differences
        for (var i = 0; i < friends.length; i++) {
            //difference variable to store difference between scores
            var difference = 0;
            for (var j = 0; j < newScores.length; j++) {
                //Use math.abs for no negative numbers(absolutes);
                difference = difference + Math.abs(friends[i].scores[j] - parseInt(newScores[j]))
            }
            if (difference < latestMatchScore) {
                latestMatchScore = difference;
                match = friends[i];
                matchName = friends[i].name;
                matchImage = friends[i].image;
            }
        }
        console.log(matchImage);
        console.log(matchName);
        // Push the new person to the friends list
        friends.push(newPerson);
        res.json(match);
    });
}