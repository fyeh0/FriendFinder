const path = require("path");

module.exports = function(app) {
  var express = require("express");

  var app = express();
  var PORT = 3000;

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
};
