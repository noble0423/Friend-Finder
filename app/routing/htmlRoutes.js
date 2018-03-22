// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // GET request route-when user visits "/survey", the user is shown the survey.html file
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // GET request route-when user visits any url other than "/survey", the user is shown the below default HTML home page of content (home.html)
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};