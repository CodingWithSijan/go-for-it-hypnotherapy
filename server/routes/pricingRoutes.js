const express = require("express");
const {
	getAllPricing,
	addNewPricing,
} = require("../controllers/pricingController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to get pricing information
router.get("/get-pricing", getAllPricing);
// Route to add new pricing information
router.post("/add-pricing", addNewPricing);

module.exports = router;
