const Booking = require("../models/Booking");

// create a new booking

exports.createBooking = async (req, res) => {
  try {
    const { service, dateTime, message, phoneNumber } = req.body;
    const { _id, email, name } = req.user;
    const booking = new Booking({
      userID: req.user._id,
      userName: name,
      userEmail: email,
      service,
      dateTime,
      message,
      phoneNumber,
    });

    await booking.save();
    res.status(201).json({
      message: `Booking Successfull`,
      booking,
      email: email,
      name: name,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get booking details of logged-in user

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).sort({
      dateTime: -1,
    });
    const activeBookings = bookings.filter(
      (booking) => booking.status === "active"
    );
    const pastBookings = bookings.filder(
      (booking) => booking.statsu !== "active"
    );

    res.json({ activeBookins, pastBookings });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
