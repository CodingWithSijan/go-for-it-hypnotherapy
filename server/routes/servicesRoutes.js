const express = require("express");
const {
	getAllServices,
	createService,
	deleteService,
} = require("../controllers/servicesController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to get all services
router.get("/get-services", protect, getAllServices);
// Route to create a new service
router.post("/add-service", protect, createService);
//Route to delete a service
router.post("/delete-service/:id", protect, deleteService);

module.exports = router;
