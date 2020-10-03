const express = require("express");
const router = express.Router();

const Machine = require("../models/machine");

// @route   GET machines
// @desc
// @access  Public
router.get("/machines", async (req, res) => {
  try {
    const machines = await Machine.find();

    res.json(machines);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Sever Error");
  }
});

module.exports = router;
