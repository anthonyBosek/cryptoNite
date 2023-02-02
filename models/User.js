const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    lastName: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    location: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    accounts: [Object],
  },
  { timestamps: true }
);

// ORIGINAL CODE **gave err**
const User = mongoose.model("User", UserSchema);
module.exports = User;

// NEW CODE **works**
// module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
