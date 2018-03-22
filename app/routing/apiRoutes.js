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
};


