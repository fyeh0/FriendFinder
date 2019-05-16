var express = require("express");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
    res.send("Welcome to Friend Finder!");
  });
  
app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "survey.html"))
  });


 app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });