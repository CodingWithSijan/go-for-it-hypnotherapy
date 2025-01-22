import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import contactImage from "../assets/stella_office_picture.jpg";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Header />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 bg-gradient-to-t  from-yellow-100 to-gray-100  text-white"
      >
        <motion.div
          className="container mx-auto px-6 lg:px-12"
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.h2
            className="text-4xl md:text-5xl text-yellow-500 font-bold mb-10 text-center"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <motion.div className="flex justify-start" variants={itemVariants}>
              <img
                src={contactImage}
                alt="Contact Us"
                className="w-full h-96 rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side - Contact Information */}
            <motion.div
              className="space-y-6 py-2 sm:py-16"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-2xl text-cyan-600" />
                <span className="text-lg font-bold text-cyan-600">
                  <Link>0415876722</Link>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-cyan-600" />
                <span className="text-lg font-bold text-cyan-600">
                  stellahypno@hotmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-cyan-600" />
                <span className="text-lg font-bold text-cyan-600">
                  Healing Minds 835 Buckley St Moonee Ponds VIC 3039
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <FaFacebook className="text-2xl  text-cyan-600" />
                <a
                  href="https://www.facebook.com/stella.dichiera"
                  className="text-lg font-bold text-cyan-700 hover:underline"
                >
                  Stella Dichierra
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContactUs;
