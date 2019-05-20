const path = require("path");
const friendArray = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    // var newfriend = req.body;
    // newcharacter.routeName = newcharacter.name
    //   .replace(/\s+/g, "")
    //   .toLowerCase();
    console.log(newfriend);
    friendArray.push(newfriend);
    res.json(friend);
  });
};
