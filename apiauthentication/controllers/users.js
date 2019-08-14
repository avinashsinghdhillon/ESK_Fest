require('dotenv').config();
const JWT = require('jsonwebtoken');
const User = require('../../models/user');

signToken = user => {
  return JWT.sign({
    iss: 'esk',
    sub: user._id,
    iat: Date.now() / 1000,
    expiresIn: '3 days'
  }, process.env.JWT_SECRET)

}

module.exports = {
  signUp: async (req, res, next) => {
    //email & password validation needed
    console.log("In the user controller step");
    // console.log('contents or req.value.body', req.value.body)
    console.log("req for signup", req.body)
    console.log('usersController.signUp() called!');
    //check if there is already a user with the same email
    const { email, password, lastName, firstName, userType} = req.body;

    let foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ error: 'Please sign-in with your email.' });
    }
    else {
      //create new user
      const newUser = new User({ email, password, lastName, firstName, userType });
      await newUser.save();

      //Generate the token
      const token = signToken(newUser);
      res.cookie('access_token', token, {
        httpOnly: true
      });

      //Respond with a token
      res.status(200).json({ success: true });
    }
  },

  signIn: async (req, res, next) => {
    //generate a token
    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    res.status(200).json({ success: true });
  },



  signOut: async (req, res, next) => {
    console.log(req.user);
    res.clearCookie('access_token');
    console.log("token", signToken);
    // console.log('I managed to get here!');
    res.redirect('/');
  },

  checkAuth: async (req, res, next) => {
    console.log("req", req.user);
    console.log("--------");
    // console.log("res", res)
    res.json(req.user);
  }
}