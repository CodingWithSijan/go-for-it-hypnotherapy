const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");

require("./config/db");
dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.REACT_BASE_URL,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

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
