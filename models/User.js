import mongoose from "mongoose";

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
// const User = mongoose.model("User", UserSchema);
// export default User;

// NEW CODE **works**
export default mongoose.models.User || mongoose.model("User", UserSchema);
