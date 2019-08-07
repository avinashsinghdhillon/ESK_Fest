const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../config/passport');//////////////what is this?////////////////

const { validateBody, schemas } =require('../helpers/routeHelpers')
const UsersController = require('../controllers/users');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
 .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
 .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);


// what does this do?////////////////////////////
//do we need this or the redirect from google at the bottom?
router.route('/itinerary')
 .get(passportJWT, UsersController.itinerary);


 //google+ auth
 router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//do we need this?////////////////////////////////////////
// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});


module.exports = router;