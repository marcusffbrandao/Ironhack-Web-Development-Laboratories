const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role: {type: String, enum: ['boss', 'developer', 'TA']}
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;