const path = require("path");

module.exports = function(app) {
  var express = require("express");

  var app = express();
  var PORT = 3000;

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
    // newcharacter.routeName = newcharacter.name
    //   .replace(/\s+/g, "")
    //   .toLowerCase();
    console.log(newfriend);
    friendArray.push(newfriend);
    res.json(friend);
  });
};
