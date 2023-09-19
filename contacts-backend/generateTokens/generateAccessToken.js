// const { use } = require("../contacts-backend/routes/userRoutes")
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      user: {
        username: user.username,
        password: user.password,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "5m" }
  );
};

module.exports = generateAccessToken;
