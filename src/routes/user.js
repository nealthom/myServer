const express = require("express");
const router = new express.Router();

const auth = require("../middleware/auth");

router.get("/test", (req, res) => {
  try {
    res.status(200).send({ msg: "You got it going on my brother!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
