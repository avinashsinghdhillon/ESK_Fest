const router = require("express").Router();
var db = require("../../models");
var isAuthenticated = require("../../config/middleware/isAuthenticated");
module.exports = function(app) {
  app.get("/secrets", isAuthenticated, function(req, res){
    res.send("SECRETS!!!!!!");
  });

  app.get("/logout", function(req, res){
    req.logout();
    res.send("SECRETS!!!!!!");
    res.redirect("/");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
