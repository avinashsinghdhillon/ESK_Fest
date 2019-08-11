var User = require("../../models/user");
//const router = require('express-promise-router')();
const router = require("express").Router();
const UsersController = require('../controllers/users');
var passport = require("../../config/passport");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = function (app) {
  console.log("In routes/apiroutes/signup.");
  // app.post("/signup", function (req, res) {
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password,
  //     userType: req.body.userType,
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName
  //   })
  //   .then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // router.post("/signup", function(req, res, next){
  //   db.User.create(req.body)
  //     .then(function(user){
  //       console.log("new user created");
  //       res.json(user);
  //     })
  //     .catch(next);
  // });
  
  // router.route("/signup")
  //   .post(UsersController.signup);

  // app.post("/api/login", passport.authenticate("local"), function (req, res) {
  //   res.json(req.user);
  // });

  // app.get("/api/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  // router.route('/checkEmail')
  // .post(UsersController.findByEmail)

  router.post('/checkEmail', function(req, res, next){
    console.log("req body: ", req.body);
    User.findOne({ email: req.body.email })
        .then(dbModel => res.json(dbModel));
  })
  
  // app.get("/checkEmail", function (req, res) {
  //   console.log("In routes/apiroutes/checkEmail.");
  //   db.User.findOne({email: req.body.email})
  // })
  // .then(function (dbUser) {
  //   res.json(dbUser);
  // });


  router.route('/users')
    .get(UsersController.findAllUsers);
};
