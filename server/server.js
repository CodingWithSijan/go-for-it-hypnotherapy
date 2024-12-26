const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
require("./models/db");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`.bgCyan);
});
