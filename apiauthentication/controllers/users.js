const User = require('../../models/user');


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

  // signIn: function (req, res) {

  // },

  findByEmail: function (req, res) {
    console.log("In users controller. findByEmail");
    User
      .findOne({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllUsers: function(req, res){
    User  
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(500).json(err))
  }
}