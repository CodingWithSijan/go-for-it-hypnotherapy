import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";

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
        duration: 0.8,
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
        className="py-16 bg-gradient-to-b from-blue-50 text-black"
      >
        <motion.div
          className="container mx-auto px-6 lg:px-12"
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 text-center"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-2xl text-yellow-600" />
                <span className="text-lg font-bold text-cyan-700">
                  +1 234 567 890
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-yellow-600" />
                <span className="text-lg font-bold text-cyan-700">
                  info@goforithypnotherapy.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-yellow-600" />
                <span className="text-lg font-bold text-cyan-700">
                  Healing Minds 835 Buckley St Moonee Ponds VIC 3039
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-2xl text-yellow-600" />
                <a
                  href="https://www.linkedin.com"
                  className="text-lg font-bold text-cyan-700 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaYoutube className="text-2xl text-yellow-600" />
                <a
                  href="https://www.youtube.com"
                  className="text-lg font-bold text-cyan-700 hover:underline"
                >
                  YouTube
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaFacebook className="text-2xl text-yellow-600" />
                <a
                  href="https://www.facebook.com"
                  className="text-lg font-bold text-cyan-700 hover:underline"
                >
                  Facebook
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="w-full h-80 mt-12 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <iframe
                title="Healing Minds Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.835434509374!2d144.8919645375039!3d-37.75425143172326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66f2f8bfba76d%3A0xdeadbeefdeadbeef!2sHealing%20Minds%20835%20Buckley%20St%20Moonee%20Ponds%20VIC%203039!5e0!3m2!1sen!2sau!4v1679030305000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContactUs;
