import { useState } from "react";
import { motion } from "framer-motion";

const BookAppointment = () => {
  const services = [
    "Quit Smoking",
    "Weight Loss (Virtual Gastric Banding)",
    "Weight Loss Group Classes",
    "Self Esteem & Confidence",
    "Anger Management",
    "Fears & Phobias",
    "Loss & Grief",
    "Motivation",
    "Stress & Anxiety",
    "Depression",
    "Public Speaking",
  ];

  const [selectedService, setSelectedService] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      selectedService,
      dateTime,
      message,
      phoneNumber,
      agreed,
    });
    alert("Appointment successfully booked!");
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 min-h-screen">
      <motion.h1
        className="text-5xl font-extrabold text-center text-blue-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book Your Appointment
      </motion.h1>
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div>
            <label
              className="block text-gray-800 font-medium text-lg mb-2"
              htmlFor="service"
            >
              Select a Service
            </label>
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose a service...</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time */}
          <div>
            <label
              className="block text-gray-800 font-medium text-lg mb-2"
              htmlFor="dateTime"
            >
              Select Date & Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-gray-800 font-medium text-lg mb-2"
              htmlFor="message"
            >
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="block text-gray-800 font-medium text-lg mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacyPolicy"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label htmlFor="privacyPolicy" className="ml-3 text-gray-700">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              Book Appointment
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BookAppointment;
