const express = require("express");
const {
  createEnquiry,
  getEnquiries,
} = require("../controllers/enquiryController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/enquiry", createEnquiry);
router.get("/enquiries", protect, getEnquiries);

module.exports = router;
