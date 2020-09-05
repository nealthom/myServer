const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Please Authenticate" });
  }
};
