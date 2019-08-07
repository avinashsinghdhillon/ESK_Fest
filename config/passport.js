require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//JSON Web Tokens Strategy
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true
}, async (req, payload, done) => {
    try{
        //find user specified in token
        const user = await User.findById(payload.sub);
        //if user doesn't exist, handle it
        if(!user){
            return done(null, false);
        }
        //otherwise, return the user
        req.user = user;
        done(null, user);
    } catch(error){
        done(error, false);
    }
}));

//Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try{
        //find the user given the email
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
        done(null, user)
    } catch(error){
        done(error, false);
    }   
}))