const path = require("path");
const friendArray = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    console.log(friendArray);


    // var newfriend = req.body;
    // newcharacter.routeName = newcharacter.name
    //   .replace(/\s+/g, "")
    //   .toLowerCase();
    // friendArray.push(newfriend);
    // res.json(friend);
  });
};
