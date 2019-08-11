//require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
const cookieSession = require('cookie-session');
const passport = require("passport");
// //this will need to be modified later if needed. connected to routes/auth-routes///////////////
// const authRoutes = require('./apiauthentication/routes/users');
//const passportSetup = require('./config/passport');
const path = require("path");
var session = require("express-session");
// var passport = require("passport");
// var session = require("express-session");
const bodyParser = require("body-parser");
const keys = process.env;


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 // For Passport
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

// set up session cookies
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.COOKIE_KEY]
// }));

// Routes
app.use(require('./apiauthentication/routes/apiRoutes'));
app.use(require('./apiauthentication/routes/htmlRoutes'));
app.use(require('./apiauthentication/routes/api/event'));
// require('./apiauthentication/routes/apiRoutes')(app);
// require('./apiauthentication/routes/api/event')(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
//Connect to Mongoose:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/esk");

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function (err) {
    if (!err) {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    }
    else{console.log(err, "Something went wrong with the possport db update");}
  });
// });

module.exports = app;
