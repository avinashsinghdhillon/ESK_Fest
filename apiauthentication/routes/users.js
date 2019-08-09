const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../config/passport');

const { validateBody, schemas } =require('../helpers/routeHelpers')
const UsersController = require('../controllers/users');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
 .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
 .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

router.route('/itinerary')
 .get(passportJWT, UsersController.itinerary);

 router.route('/checkEmail')
 .post(UsersController.findByEmail)

//  router.route('/signup')
//  .post(UsersController.signUp)

module.exports = router;