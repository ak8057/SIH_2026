const express = require("express");
const Module = require("../models/Module");
const auth = require("../middleware/auth");
const permit = require("../middleware/roles");

const router = express.Router();

// Public: get all modules
router.get("/", async (req, res) => {
  try {
    const modules = await Module.find({ published: true }).sort({
      createdAt: -1,
    });
    return res.json({ modules });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// Create module (protected: champion or government)
router.post("/", auth, permit("champion", "government"), async (req, res) => {
  try {
    const {
      slug,
      title,
      description,
      duration,
      difficulty,
      topics,
      points,
      path,
    } = req.body;
    const mod = await Module.create({
      slug,
      title,
      description,
      duration,
      difficulty,
      topics,
      points,
      path,
    });
    return res.status(201).json({ module: mod });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
