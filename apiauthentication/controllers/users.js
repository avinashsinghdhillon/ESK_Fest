const User = require('../../models/user');
const passport = require('../../config/passport')


module.exports = {
  signup: function (req, res) {
    console.log("In users controller. signUp");
    User
    .create({
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  logout:function (req, res) {
    req.logout();
    res.send("logged out");
  },


  signin: function (req, res) {
    passport.authenticate("local");
    return res.json(req.user);
  },

  findByEmail: function (req, res) {
    console.log("In users controller. findByEmail");
    User
      .findOne({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllUsers: function(req, res){
    console.log("In users controller. findAllUsers");
    User  
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err))
  }
}