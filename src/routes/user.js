const express = require("express");
const router = new express.Router();

router.get("/test", (req, res) => {
  try {
    res.status(200).send({ msg: "You got it going on my brother!" });
  } catch (errr0) {
    res.status(400).send(error);
  }
});

module.exports = router;
