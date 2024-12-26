const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...".bgGreen);
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

connectToDatabase();
