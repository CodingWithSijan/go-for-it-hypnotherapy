// src/components/Header.js

import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserPlus,
  FaCalendarAlt,
} from "react-icons/fa";

import navbar_logo from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinkStyles = "text-gray-600 hover:text-gray-900";
  const activeStyles = "text-blue-600 font-semibold";

  return (
    <header className="bg-gray-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-800"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src={navbar_logo}
            alt="Go For it Hypnotherapy"
            className="w-[12rem] h-[3rem]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyles : navLinkStyles
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeStyles : navLinkStyles
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? activeStyles : navLinkStyles
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyles : navLinkStyles
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="flex justify-between items-center">
            <FaSignInAlt className="mr-2" />
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? activeStyles : navLinkStyles
              }
            >
              Login
            </NavLink>
          </div>
          <div className="flex justify-between items-center">
            <FaUserPlus className="mr-2" /> {/* Signup icon */}
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? activeStyles : navLinkStyles
              }
            >
              Sign Up
            </NavLink>
          </div>
          <NavLink
            to="/book_appointment"
            className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
            Book Appointment
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 shadow-md">
          <ul className="space-y-4 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? activeStyles : navLinkStyles
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
