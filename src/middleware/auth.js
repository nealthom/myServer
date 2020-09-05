const jwt = require("jsonwebtoken");
const User = require("../models/user");

// const auth = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization").replace("Bearer ", "");
//     const decoded = jwt.verify(token, process.env.jwtSecret);

//     const user = await User.findOne({
//       _id: decoded._id,
//       "tokens.token": token
//     });
//     if (!user) {
//       throw new Error();
//     }
//     req.token = token;
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({
//       error: `Please authenticate!`
//     });
//   }
// };

// module.exports = auth;

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
