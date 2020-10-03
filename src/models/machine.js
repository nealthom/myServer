const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MachineSchema = new Schema({
  Location: {
    type: String,
    required: true
  },
  Name: {
    type: String
  }
});

module.exports = mongoose.model("Machine", MachineSchema);
