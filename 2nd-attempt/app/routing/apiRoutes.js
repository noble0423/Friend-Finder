// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "", 
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Here we are taking the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);
        
        // This variable will calculate the difference between the user's scores and the scores of each potential tag partners in the database
        // var totalDifference = 0;

        // Loop through all of the potential tag partner possibilities in the database.
        for (var i = 0; i < friendData.length; i++) {

            console.log(friendData[i]);
            var totalDifference = 0;

            // Loop through all of the scores of each tag partner
            for (var j = 0; j < friendData[i].scores[j]; j++) {

                // Calculate the difference between the scores and sum them into totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
                console.log(totalDifference);

                // If the sum of differences is less than the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new tag partner
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                } 
            }
        }

        // Finally, we save the user's data to the database (this has to happen AFTER the check, otherwise, the database will always return that the user is the user's tag partner)
        friendData.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page.
        res.json(bestMatch);
    });
};