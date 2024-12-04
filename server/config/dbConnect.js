//Mongo DB connection
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected...HOST:${conn.connection.host}`.bgGreen);
  } catch (err) {
    console.error(`Error connecting to MongoDB... ${err}`);
  }
};

module.exports = connectDB;
