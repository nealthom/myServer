const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    console.log("authenticating");
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate!" });
  }
};

module.exports = auth;
