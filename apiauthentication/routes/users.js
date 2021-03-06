const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../config/passport');

// const { validateBody, schemas } =require('../helpers/routeHelpers')
const UsersController = require('../controllers/users');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
//  .post(validateBody(schemas.authSchema), UsersController.signUp);
 .post(UsersController.signUp);

router.route('/signout')
//  .post(validateBody(schemas.authSchema), UsersController.signUp);
 .get(passportJWT, UsersController.signOut);

router.route('/signin')
//  .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);
 .post(passportSignIn, UsersController.signIn);

// router.route('/itinerary')
//  .get(passportJWT, UsersController.itinerary);

 router.route('/status')
    .get(passportJWT, UsersController.checkAuth)

module.exports = router;