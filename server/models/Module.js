const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true }, // e.g. "waste-basics"
    title: String,
    description: String,
    duration: String,
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Easy", "Medium", "Hard"],
      default: "Beginner",
    },
    topics: [String],
    points: { type: Number, default: 50 },
    path: String, // front-end route slug if needed
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Module", ModuleSchema);
