// var db = require("../models");
// var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  //Load our landing page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  // app.get("/", function(req, res, next) {
  //   res.sendfile("./html/auth.html");
  // });

  //Load our sign-up page
  app.get("/signup", function(req, res){
    res.render("newAccount");
  });

  // modal signin
  app.get("/login", function(req, res) {
  //   console.log("is user authenticated" + isAuthenticated);
  //   // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/characters");
    } else {
      res.render("login");
    }

  });
  // app.get("/viewAccount", isAuthenticated, function(req, res){
  //   res.send("viewAccount");
  // });
 
  // "welcome-back"
  //if a user is not logged in and tries to access this page they will be redirected to the signin page
  app.get("/welcomeback", function(req, res){
    res.redirect("/");
  });
 
  // character creation
  app.get("/characters", function(req, res){
    res.render("characterCreation");
  });

  // game page
  app.get("/game", isAuthenticated, function(req, res){
    res.render("gamepage");
  });

  app.post("api/mychar", isAuthenticated, function(req, res){
    // db.Players.findOne({ where: { userName: res.body.userName}});
    res.render("/welcomeBack");
  });
 
  
  //logout 
  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
