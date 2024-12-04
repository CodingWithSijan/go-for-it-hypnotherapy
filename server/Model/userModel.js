const mongoose = require("mongoose");

//user schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
