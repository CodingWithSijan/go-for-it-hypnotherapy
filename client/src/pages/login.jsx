import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import bannerImage from "../assets/landing_page/banner_1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../utils/utils";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );
      setIsSubmitting(true);
      const { success, message, jwtToken, name, email } = await response.data;
      console.log("Response: " + message);
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError("Invalid email or password!");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      handleError("Invalid email or password!");
    } finally {
      setIsSubmitting(false);
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
          <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-4">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600">
            Log in to access your account.
          </p>

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

          {/* Forgot Password Link */}
          <div>
            <NavLink to="/forgot-password" className="text-blue-500 text-sm">
              Forgot Password?
            </NavLink>
          </div>

          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging In..." : "Log In"}
            </motion.button>
          </div>

          {/* Don't have an account */}
          <div className="text-center">
            <p>
              Don't have an account?
              <NavLink to="/signup">
                <b className="text-blue-500 text-md ml-2">Sign Up</b>
              </NavLink>
            </p>
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
          alt="Login Banner"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Login;
