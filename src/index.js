const express = require("express");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Make Love not War!");
});

app.get("/test", (req, res) => {
  try {
    res.status(200).send({ msg: "You got it working my brother" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log("server started");
});
