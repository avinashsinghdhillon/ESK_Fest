require('dotenv').config();
const JWT = require('jsonwebtoken');
const User = require('../../models/user');

signToken = user => {
    return JWT.sign({
        iss: 'esk',
        sub: user._id,
        iat: Date.now() / 1000,
        expiresIn: '4 days'
    }, process.env.JWT_SECRET)

}


module.exports = {
    signUp: async (req, res, next) => {
        //email & password validation needed
        console.log('contents or req.value.body', req.value.body)
        console.log('usersController.signUp() called!')
        //check if there is already a user with the same email
        const { email, password, lastName, firstName, userID, userType, } = req.value.body;

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email or password is incorrect.' });
        }
        //create new user
        const newUser = new User({ email, password, lastName, firstName, userID, userType });
        await newUser.save();

        //Generate the token
        const token = signToken(newUser);

        //Respond with a token
        res.status(200).json({ token })
    },

    signIn: async (req, res, next) => {
        //generate a token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    itinerary: async (req, res, next) => {
        console.log('I managed to get here');
        res.json({ secret: "resource"})
    }
}