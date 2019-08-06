require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('./models/user')

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