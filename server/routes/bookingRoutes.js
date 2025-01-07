const router = require("express").Router();
const {
  createBooking,
  getUserBookings,
  getAllBookings,
} = require("../controllers/bookingController");
const authenticate = require("../middleware/auth");

// Booking Routes
router.post("/book", authenticate, createBooking);
router.get("/my-bookings", authenticate, getUserBookings);
router.get("/getAllBookings", getAllBookings)

module.exports = router;
