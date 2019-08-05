module.exports = {
    signUp: async (req, res, next) => {
        //email & password validation needed
        console.log('contents or req.value.body', req.value.body)
        console.log('usersController.signUp() called!')
    },
    
    signIn: async (req, res, next) => {
        //generate a token
        console.log('usersController.signIn() called!')
    },

    itinerary: async (req, res, next) => {
        console.log('usersController.itinerary() called!')
    }
}