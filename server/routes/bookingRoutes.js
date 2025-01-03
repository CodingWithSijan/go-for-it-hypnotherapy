const router = require("express").Router();
const {
  createBooking,
  getUserBookings,
} = require("../controllers/bookingController");
const authenticate = require("../middleware/auth");

// Booking Routes
router.post("/book", authenticate, createBooking);
router.get("/my-bookings", authenticate, getUserBookings);

module.exports = router;
