const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema(
  {
    greenCredits: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    points: { type: Number, default: 0 },
    modulesCompleted: [{ type: String }], // store module IDs or slugs
    // you can extend with timestamps, quiz results, etc.
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["citizen", "worker", "champion", "government"],
      required: true,
    },
    avatar: String,
    location: String,
    stats: { type: StatsSchema, default: () => ({}) },
  },
  { timestamps: true }
);

userSchema.methods.toProfileJSON = function () {
  // a method to return safe profile (without password)
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
    avatar: this.avatar,
    location: this.location,
    stats: this.stats,
  };
};

module.exports = mongoose.model("User", userSchema);
