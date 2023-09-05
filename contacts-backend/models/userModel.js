const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please enter your username"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email already in use"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    }
})

module.exports = mongoose.model("User", userSchema)