const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 16 },
  password: { type: String, required: true, maxLength: 128 },
  isMember: { type: Boolean, required: true },
  isAdmin: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", UserSchema);
