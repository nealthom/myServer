const express = require("express");

const userRouter = require("./routes/user");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
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
