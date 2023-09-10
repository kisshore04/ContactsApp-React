const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  //   console.log("token call");
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    // console.log("token call");
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "user is not authorized" });
      }
      // console.log(decoded);
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized");
    }
  }
};

module.exports = validateToken;
