const express = require("express");
const {
  createEnquiry,
  getEnquiries,
} = require("../controllers/enquiryController");

const router = express.Router();

router.post("/enquiry", createEnquiry);
router.get("/enquiries", getEnquiries);

module.exports = router;
