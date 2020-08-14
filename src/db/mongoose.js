const mongoose = require("mongoose");

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
