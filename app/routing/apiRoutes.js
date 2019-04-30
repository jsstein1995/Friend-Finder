// var allFriends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(allFriends);
    });

    // API POST Requests
    app.post("/api/tables", function (req, res) {

        //code goes here!!!
    });
}