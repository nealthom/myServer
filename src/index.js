require("dotenv").config();
const express = require("express");
require("./db/mongoose");

const userRouter = require("./routes/user");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello friend let's do this!");
});

app.listen(PORT, () => {
  console.log("server started");
});
