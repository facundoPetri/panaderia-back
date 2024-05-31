import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastSession: Date,
  state: {
    type: Boolean,
    default: true,
  },
  image: String,
});

export const User = mongoose.model("User", userSchema);
