const express = require("express");
const {
  login,
  markEnquiryAsCompleted,
  verifyToken,
} = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.post("/signup", signup);
router.post("/login", login);
router.patch("/enquiries/:id", markEnquiryAsCompleted);
router.get("/verify-token", verifyToken);
module.exports = router;
