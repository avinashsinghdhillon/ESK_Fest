const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: { type: Number, required: true, unique: true },
    userType: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true },
    googleID: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

//this will run before we save our user
userSchema.pre('save', async function(next){
try {
    //generate salt for hashing password
    const salt = await bcrypt.genSalt(10);
    //generate password hash (salt + hash)
    const passwordHash = await bcrypt.hash(this.password, salt);
    //assign hashed version over original, plain text password
    this.password = passwordHash;
    next();
} catch(error){
    next(error)
}
});

userSchema.methods.isValidPassword = async function(newPassword){
    try{
        return await bcrypt.compare(newPassword, this.password);
    } catch(error){
        throw new Error(error);
    }
}

const User = mongoose.model("user", userSchema);

module.exports = User;
