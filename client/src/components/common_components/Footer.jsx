// src/components/Footer.jsx
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"; // Using React icons for social media

const Footer = () => {
  return (
    <footer className="bg-[#202939] text-white py-8 mt-12 border-t-2 border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2">📍</span> Healing Minds 835 Buckley St
              Moonee Ponds VIC 3039
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span> info@goforithypnotherapy.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span> 0415 876 722
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 sm:text-center">
            Quick Links
          </h3>
          <ul className="space-y-3 flex flex-col justify-between items-start sm:items-center">
            <li>
              <Link to="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-indigo-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="col-span-full text-center mt-8 sm:mt-0">
          <p className="text-sm text-gray-600">
            &copy; 2024 Go For It Hypnotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
