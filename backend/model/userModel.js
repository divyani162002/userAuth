const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
