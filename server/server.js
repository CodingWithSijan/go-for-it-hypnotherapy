const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

require("./config/db");
dotenv.config();

const app = express();

// Limiting Requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(helmet());

// Import routes
const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const emailRoutes = require("./routes/emailRoutes");

// Use routes
app.get("/", (req, res) => {
  res.send("Hello from the server");
});
app.use("/api", enquiryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", emailRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`.bgCyan);
});
