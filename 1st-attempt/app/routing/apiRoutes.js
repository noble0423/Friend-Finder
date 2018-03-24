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
    // HTML Get request. When user "visits" a page, they are shown an HTML page of content
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // Post request.
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.end();
    });

    // POST info gathered from our survey to the express server? i don't know what page this info should be on, if it even works, and then where to POST it too.
    app.post("/api/friends", function(req, res) {
        var newPersonScore = req.body.score;
        var lowScore = 100;
        var newTagPartner

        for (var i = 0; i < partnerArray.length; i++) {
            var newLowScore = 0

            for (var j = 0; j < partnerArray[i].scores.length; j++) {
                newLowScore += Math.abs(newPersonScore[j] - partnerArray[i].score[j]);
            }
            if (newLowScore < lowScore) {
                lowScore = newLowScore;
                newTagPartner = partnerArray[i];
            }
        }
        partnerArray.push(req.body)
        res.send(newTagPartner);
    });
};


