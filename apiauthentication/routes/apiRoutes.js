var User = require("../../models/user");
//const router = require('express-promise-router')();
const router = require("express").Router();
const UsersController = require('../controllers/users');
var passport = require("../../config/passport");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/users")
  .get(UsersController.findAllUsers);

router.route('/checkEmail')
  .post(UsersController.findByEmail)

router.route("/signup")
  .post(UsersController.signup);

router.route("/signin")
  .post(UsersController.signIn);

module.exports = router;