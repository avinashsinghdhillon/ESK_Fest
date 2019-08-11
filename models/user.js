const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userType: { type: String, required: false },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    googleID: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next){
    return bcrypt.genSalt(10).then(salt => {
        return bcrypt.hash(this.password, salt)
    }).then(hash => {
        this.password = hash
        return Promise.resolve()
    })
});

const User = mongoose.model("user", userSchema);

module.exports = User;
