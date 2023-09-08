const express = require('express')
const { loginUser, registerUser, currentUser } = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandler')
const userRoutes = express.Router()

userRoutes.post("/login", loginUser)

userRoutes.post("/register", registerUser)

userRoutes.get("/current", validateToken, currentUser)

module.exports = userRoutes