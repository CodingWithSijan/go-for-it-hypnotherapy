const express = require("express");
const {
	getAllPricing,
	createPricing,
	getPricingById,
	deletePricing,
	updatePricing,
} = require("../controllers/pricingController");

// const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to get all pricing
router.get("/get-all-pricing", getAllPricing);
// Route to create a new pricing
router.post("/add-pricing", createPricing);
// Route to get pricing by ID
router.get("/get-pricingbyid/:id", getPricingById);
// Route to update pricing
router.patch("/update-pricing/:id", updatePricing);
// Route to delete pricing
router.post("/delete-pricing/:id", deletePricing);

module.exports = router;
