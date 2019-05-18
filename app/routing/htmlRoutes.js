const path = require("path");

module.exports = function(app) {
  var express = require("express");

  var app = express();
  var PORT = 3000;

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

};
