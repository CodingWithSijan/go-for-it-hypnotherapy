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
    console.log("Authenticated user ID:", req.user._id);
    const bookings = await Booking.find({ userID: req.user._id });
    const activeBookings = bookings.filter(
      (booking) => booking.status === "active"
    );
    const pastBookings = bookings.filter(
      (booking) => booking.status !== "active"
    );

    res.json({ activeBookings, pastBookings });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try{
    const bookings = await Booking.find();
    res.json({bookings})
    }catch(error){
    console.log("Server Error: ", error.message);
    res.status(500).json({message: "Server Error", error: error.message});
  }
}
