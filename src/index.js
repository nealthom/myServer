const express = require("express");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Please Work, Fingers crossed!");
});

app.get("/test", (req, res) => {
  try {
    res.status(200).send({ msg: "You got it working my brother" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("server started");
});
