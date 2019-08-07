var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Get all players
  app.get("/api/players", function (req, res) {
    db.Players.findAll({}).then(function (dbPlayers) {
      res.json(dbPlayers);
    });
  });


  // Create a new player
  app.post("/api/signup", function (req, res) {
    db.Players.create(req.body).then(function () {
      res.redirect(307, "/login");
    })
      .catch(function (err) {
        res.status(401).json(err);
      });

  });

  //login
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.redirect("/characters");
  });

  app.put("/api/players/pick_character", function (req, res) {
    debugger;
    console.log(req.body);
    console.log(req.user);
    db.Players.update(
      { lastAvatarId: req.body.avatarId },
      {
        where: {
          userName: req.user.userName
        }
      }
    ).then(function (dbPlayers) {
      res.json(dbPlayers);
    });
  });

  app.put("/api/players/:score", function(req, res){
    console.log("put request for score");
    db.Players.update(
      { lastGameLog: req.params.score},
      {
        where: {userName: req.user.userName}
      }
    ).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });

};
