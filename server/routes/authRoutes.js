const express = require("express");
const {
  registrationController,
  upload,
} = require("../controllers/authController");
const router = express.Router();

///routes
//REGISTER || method = POST
router.post("/register", upload.single("file"), registrationController);

module.exports = router;
