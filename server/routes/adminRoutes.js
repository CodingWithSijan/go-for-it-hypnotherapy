const express = require("express");
const {
  signup,
  login,
  markEnquiryAsCompleted,
  verifyToken,
} = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.patch("/enquiries/:id/complete", protect, markEnquiryAsCompleted);
router.get("/verify-token", protect, verifyToken);
module.exports = router;
