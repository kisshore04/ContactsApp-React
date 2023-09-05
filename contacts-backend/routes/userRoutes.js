const express = require('express')
const { loginUser, registerUser, currentUser } = require('../controllers/userController')
const userRoutes = express.Router()

userRoutes.post("/login", loginUser)

userRoutes.post("/register", registerUser)

userRoutes.get("/current", currentUser)

module.exports = userRoutes