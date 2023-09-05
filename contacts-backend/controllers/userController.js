const User = require('../models/userModel')
const bcrypt = require('bcrypt')
// @desc Login user
// @route api/users/login
// @access public
const loginUser = async (req, res) => {
}

// @desc Register user
// @route api/users/register
// @access public
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            res.status(400)
            throw new Error("All fields are mandatory!")
        }
        const userAvailable = await User.findOne({ email })
        if (userAvailable) {
            res.status(400)
            throw new Error("User mail already exists")
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        res.status(200).send("Password hashed")
    } catch (error) {
        console.error(error)
        res.status(500).json("Server error")
    }
}

// @desc Current user
// @route api/users/current
// @access public
const currentUser = (req, res) => {
    res.json({ message: "In current user page" })
}

module.exports = { loginUser, currentUser, registerUser }