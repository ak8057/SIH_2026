const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db"); // this already uses mongoose
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const modulesRoutes = require("./routes/modules");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connect to MongoDB once
connectDB(process.env.MONGO_URI);

// Test route
app.get("/ping", (req, res) => {
  console.log("👉 Ping received");
  res.json({ msg: "pong" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/modules", modulesRoutes);

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
