import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import navbar_logo from "../../assets/logo.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { to: "/", label: "HOME" },
    {
      to: "/services",
      label: "SERVICES",
    },
    { to: "/pricing", label: "PRICING" },
    { to: "/contactus", label: "CONTACT US" },
  ];
  const navLinkStyles = `
  relative px-4 py-2 text-white font-medium
  before:content-['']
  before:absolute
  before:bottom-0
  before:left-0
  before:w-full
  before:h-0.5
  before:bg-white
  before:scale-x-0
  before:transition-transform
  before:duration-300
  hover:before:scale-x-100
  transition-all
  duration-300
  hover:text-yellow-200
  transform
  hover:-translate-y-0.5
`;

  const activeStyles = `
  text-yellow-200
  before:scale-x-100
`;
  // Updated styles with new background
  return (
    <header className="bg-gradient-to-r from-teal-600 via-cyan-700 to-teal-600  shadow-lg sticky w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink
          to="/"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <img src={navbar_logo} alt="Logo" className="w-[12rem] h-[3rem]" />
        </NavLink>

        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${navLinkStyles} ${
                    isActive ? activeStyles : ""
                  } flex items-center`
                }
              >
                {item.label}
                {item.dropdownItems && <FaChevronDown className="ml-1" />}
              </NavLink>

              {item.dropdownItems && activeDropdown === item.label && (
                <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-md shadow-xl animate-fadeIn">
                  {item.dropdownItems.map((dropItem) => (
                    <NavLink
                      key={dropItem.to}
                      to={dropItem.to}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors duration-200"
                    >
                      {dropItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/enquiry"
            className="
              px-6 py-3 
              bg-yellow-400 
              text-blue-900 
              rounded-full 
              font-bold 
              shadow-lg
              hover:shadow-xl
              hover:bg-yellow-300
              transform 
              hover:-translate-y-0.5 
              transition-all 
              duration-300
              flex 
              items-center
            "
          >
            <FaCalendarAlt className="mr-2" />
            Make an Enquiry
          </NavLink>
        </div>

        <button
          className="md:hidden text-white text-2xl p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden 
          fixed 
          inset-0 
          bg-blue-900/95 
          transform 
          transition-transform 
          duration-300 
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-2xl font-medium 
                hover:text-yellow-200 
                transform 
                hover:scale-110 
                transition-all 
                duration-300 
                ${isActive ? "text-yellow-200" : ""}`
              }
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/enquiry"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-full font-bold"
          >
            <FaCalendarAlt className="inline mr-2" />
            Make an Enquiry
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
