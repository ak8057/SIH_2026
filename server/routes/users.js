const express = require("express");
const auth = require("../middleware/auth");
const permit = require("../middleware/roles");
const User = require("../models/User");

const router = express.Router();

// Get a user profile (protected)
router.get("/:id", auth, async (req, res) => {
  try {
    const u = await User.findById(req.params.id);
    if (!u) return res.status(404).json({ message: "User not found" });
    return res.json({ user: u.toProfileJSON() });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// Update own stats (only the user themselves or government can update)
router.put("/:id/stats", auth, async (req, res) => {
  try {
    const targetId = req.params.id;
    if (
      req.user._id.toString() !== targetId &&
      req.user.role !== "government"
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { stats } = req.body; // expect partial stats object
    const user = await User.findById(targetId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // merge stats safely
    user.stats = { ...user.stats.toObject(), ...stats };
    await user.save();
    return res.json({ user: user.toProfileJSON() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Mark module complete (increase points & add to modulesCompleted)
router.post("/:id/complete-module", auth, async (req, res) => {
  try {
    const targetId = req.params.id;
    if (
      req.user._id.toString() !== targetId &&
      req.user.role !== "government"
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { moduleSlug, points = 50 } = req.body;
    const user = await User.findById(targetId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.stats.modulesCompleted.includes(moduleSlug)) {
      user.stats.modulesCompleted.push(moduleSlug);
      user.stats.points = (user.stats.points || 0) + points;
      user.stats.greenCredits =
        (user.stats.greenCredits || 0) + Math.round(points * 0.1); // example
      await user.save();
    }

    return res.json({ user: user.toProfileJSON() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
