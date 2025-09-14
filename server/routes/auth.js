const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const auth = require("../middleware/auth");

const router = express.Router();

// Register
router.post(
  "/register",
  [
    body("name").isLength({ min: 2 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("role").isIn(["citizen", "worker", "champion", "government"]),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role, location } = req.body;
    try {
      const existing = await User.findOne({ email });
      if (existing)
        return res.status(400).json({ message: "Email already registered" });

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password: hashed,
        role,
        location,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
          email
        )}`,
      });

      const token = generateToken(
        user,
        process.env.JWT_SECRET,
        process.env.JWT_EXPIRES || "7d"
      );

      return res.status(201).json({ user: user.toProfileJSON(), token });
    } catch (err) {
      console.error("Error during registration:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

// Login
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ message: "Invalid credentials" });

      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = generateToken(
        user,
        process.env.JWT_SECRET,
        process.env.JWT_EXPIRES || "7d"
      );
      return res.json({ user: user.toProfileJSON(), token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

// Get current user
router.get("/me", auth, async (req, res) => {
  return res.json({ user: req.user.toProfileJSON() });
});

module.exports = router;
