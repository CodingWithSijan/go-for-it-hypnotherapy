const express = require("express");

const cors = require("cors");
require("dotenv").config();
require("colors");
const connectDB = require("./config/dbConnect");

//REST object
const app = express();

//start connection with database
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`.bgCyan);
});
