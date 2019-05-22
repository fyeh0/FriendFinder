const path = require("path");
const friendArray = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    console.log(friendArray);
    // console.log(newfriend);

    var newfriend = req.body;
    var scores = newfriend.scores;

    // var matchName = "";
    // var matchImage = "";
    var totalDiff = 10;

    for (let i = 0; i < friendArray.length; i++) {
      // friendArray.forEach(function(friend) {
      var bestMatch = 0;
      for (let j = 0; j < friendArray[i].scores[j]; j++) {
        // friend.scores.forEach(function(userAnswers, i) {
        // console.log(`Comparing ${friendArray.scores[j]} to ${friend.scores[i]}`);
        bestMatch += Math.abs(friendArray[i].scores[i] - scores[j]);
      }
      if (bestMatch < totalDiff) {
        totalDiff = bestMatch;
        var matchName = friendArray[i].name;
        var matchImage = friendArray[i].photo;
      }
    }

    friendArray.push(newfriend);
    res.json(newfriend);
  });
};
