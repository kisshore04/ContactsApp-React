const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../generateTokens/generateAccessToken");

// @desc Login user
// @route api/users/login
// @access public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json({ error: "All fields are mandatory" });
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = generateAccessToken(user);
    res.status(200).json({ accessToken });
  } else {
    res.status(401).send("Authentication failed!");
  }
};

// @desc Register user
// @route api/users/register
// @access public
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User mail already exists");
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(200).json({ message: "user created", data: user });
  } else {
    res.status(400);
    throw new Error("Invalid data entered");
  }
};

// @desc Current user
// @route api/users/current
// @access public
const currentUser = (req, res) => {
  console.log("called");
  res.json({ data: req.user, message: "In the current user" });
  // res.send("hello")
};

module.exports = { loginUser, currentUser, registerUser };
