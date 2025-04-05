const express = require("express");
const {
	getAllPricing,
	createPricing,
	//   deletePricing,
	//   getPricingById,
	//   updatePricing,
} = require("../controllers/pricingController");

// const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to get all pricing
router.get("/get-all-pricing", getAllPricing);
// Route to create a new pricing
router.post("/add-pricing", createPricing);

module.exports = router;
