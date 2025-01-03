import { useState } from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/landing_page/banner_1.jpg";
import { NavLink } from "react-router-dom";
import { handleSuccess, handleError } from "../utils/utils";
import { validateData } from "../utils/validationHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  // useState hook form setting formData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  // Error state
  const [errors, setErrors] = useState({});
  // changing the signup button to "signing up... and disabling it while submitting"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  // getting input from user
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  //Validation data using validationHelper.js from utils
  const validate = () => {
    return validateData(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // sending data to backend using axios
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        formData
      );
      setIsSubmitting(true);
      console.log("Response: ", response.data);
      handleSuccess("User Registered Successfully...Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("Error: ", error);
      if (error.response.status === 409) {
        handleError(error.response.data.message);
      }
      setIsSubmitting(false);
      handleError("Failed to register. Please try again");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Form Section */}
      <motion.div
        className="w-full md:w-1/2 h-full px-6 py-12 md:px-12 bg-white shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl mt-6 font-extrabold text-center text-blue-700 mb-4">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600">
            Sign up to get started with our services!
          </p>

          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (0421737089)"
              className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          {/* Already have an account login */}
          <div>
            <p>
              Already have an account
              <NavLink to="/login">
                <b className="text-blue-500 text-md ml-2">Login</b>
              </NavLink>
            </p>
          </div>
          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Banner Section */}
      <motion.div
        className="hidden md:block w-full md:w-1/2 h-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={bannerImage}
          alt="Signup Banner"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default SignUp;
