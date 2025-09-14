const mongoose = require("mongoose");

async function connectDB(uri) {
  try {
    await mongoose.connect(uri, {
      dbName: "wasteDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    console.log("👉 Using DB:", mongoose.connection.name);
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }
}

module.exports = connectDB;
