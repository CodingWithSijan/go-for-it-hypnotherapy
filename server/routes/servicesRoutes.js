const express = require("express");
const {
	getAllServices,
	createService,
	deleteService,
	getServiceById,
	updateService,
} = require("../controllers/servicesController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Route to get all services
router.get("/get-services", protect, getAllServices);
// Route to create a new service
router.post("/add-service", protect, createService);
//Route to delete a service
router.post("/delete-service/:id", protect, deleteService);
// ROute to update a service
router.patch("/update-service/:id", protect, updateService);
// Route to get a service by ID
router.get("/get-servicebyid/:id", protect, getServiceById);
module.exports = router;
