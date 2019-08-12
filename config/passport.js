require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['access_token'];
    }
    return token;
  }

// JSON WEB TOKENS STRATEGY
    passport.use(new JwtStrategy({
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET,
        passReqToCallback: true
        }, async (req, payload, done) => {
            try {
            // Find the user specified in token
            const user = await User.findById(payload.sub);
        
            // If user doesn't exists, handle it
            if (!user) {
                return done(null, false);
            }
            // Otherwise, return the user
            req.user = user;
            done(null, user);
        } catch(error) {
            done(error, false);
        }
    }));

//Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try{
        //find the user given the email
        console.log("searching for user by email passport local")
        const user = await User.findOne({ email });
        //if not, handle it
        if (!user) {
            return done(null, false);
        }
        //check if password is correct
        const isAuthenticated = await user.isValidPassword(password);

        //if not, handle
        if(!isAuthenticated){
            return done(null, false);
        }
        //otherwise, return the user
        console.log("you have been logged in")
        done(null, user)
    } catch(error){
        done(error, false);
    }   
}))