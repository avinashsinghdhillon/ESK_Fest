var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "userName"
  },
  function(userName, password, done) {
    db.Players.findOne({
      where: {
        userName: userName
      }
    }).then(function(dbPlayers) {
      if(!dbPlayers) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      //if the password is incorrect for the user
      else if (!dbPlayers.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //if none of the above, return the user
      return done(null, dbPlayers);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});


// // used to serialize the user for the session
// passport.serializeUser(function(user, done) {
//   done(null, user.id); 
// // where is this user.id going? Are we supposed to access this anywhere?
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//   dbPlayers.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
module.exports = passport;