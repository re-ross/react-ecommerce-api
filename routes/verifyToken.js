const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) res.status(403).json("Invalid token.");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Not authenticated.");
  }
};

module.exports = { verifyToken };
