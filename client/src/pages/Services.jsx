import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Services = () => {
  const services = [
    {
      title: "Quit Smoking",
      details:
        "Break free from smoking with proven hypnotherapy techniques designed to help you quit for good.",
    },
    {
      title: "Weight Loss (Virtual Gastric Banding)",
      details:
        "Achieve weight loss effectively with Virtual Gastric Banding techniques, customized for your needs.",
    },
    {
      title: "Weight Loss Group Classes",
      details:
        "Join group sessions to lose weight with support and guidance from Stella.",
    },
    {
      title: "Self Esteem & Confidence",
      details:
        "Boost your self-esteem and confidence with tailored hypnotherapy sessions.",
    },
    {
      title: "Anger Management",
      details:
        "Learn to manage and control your anger through specialized hypnotherapy techniques.",
    },
    {
      title: "Fears & Phobias",
      details:
        "Overcome your fears and phobias with effective hypnotherapy sessions.",
    },
    {
      title: "Loss & Grief",
      details:
        "Find peace and healing through hypnotherapy during times of loss and grief.",
    },
    {
      title: "Motivation",
      details:
        "Increase your motivation and achieve your goals with hypnotherapy.",
    },
    {
      title: "Stress & Anxiety",
      details:
        "Reduce stress and anxiety with calming and effective hypnotherapy techniques.",
    },
    {
      title: "Depression",
      details:
        "Manage and alleviate symptoms of depression with supportive hypnotherapy.",
    },
    {
      title: "Public Speaking",
      details:
        "Gain confidence and improve your public speaking skills through hypnotherapy.",
    },
    {
      title: "Other",
      details:
        "Explore other areas where hypnotherapy can help you achieve positive change.",
    },
    {
      title: "Follow Up Session",
      details:
        "Continue your progress with follow-up hypnotherapy sessions tailored to your needs.",
    },
  ];

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
        className="py-16 bg-gradient-to-b from-blue-50 text-white"
      >
        <motion.div
          className="container mx-auto px-6 lg:px-12"
          variants={containerVariants}
        >
          {/* Title Section */}
          <motion.h2
            className="text-4xl md:text-5xl text-yellow-600 font-bold mb-10 text-center"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl text-indigo-600 mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CheckCircleIcon className="h-10 w-10 text-yellow-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.details}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/enquiry"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-900 bg-white rounded-full shadow-xl hover:bg-gray-100 transform transition-all duration-300 hover:shadow-2xl"
            >
              <FaCalendarAlt className="mr-2" />
              Make an Enquiry Now
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Services;
