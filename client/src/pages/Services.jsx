import { useState } from "react";
import stellaImage from "../assets/landing_page/stella.jpg";
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
        "Learn how to control your anger and manage emotions effectively.",
    },
    {
      title: "Fears & Phobias",
      details:
        "Overcome your fears and phobias through specialized hypnotherapy techniques.",
    },
    {
      title: "Loss & Grief",
      details:
        "Find peace and healing while navigating through loss and grief.",
    },
    {
      title: "Motivation",
      details:
        "Rediscover your drive and focus to achieve your personal and professional goals.",
    },
    {
      title: "Stress & Anxiety",
      details:
        "Relieve stress and anxiety with calming and effective hypnotherapy sessions.",
    },
    {
      title: "Depression",
      details:
        "Improve your mental health and overcome depression with Stella's guidance.",
    },
    {
      title: "Public Speaking",
      details:
        "Conquer your fear of public speaking and develop confidence in front of an audience.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 min-h-screen py-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock Your Potential with Stella Dichiera
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stella is a Clinical Hypnotherapist dedicated to helping you
            transform your life. Explore our specialized services and take the
            first step toward positive change.
          </p>
          <motion.a
            href="/book_appointment"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Book Your Appointment
          </motion.a>
        </section>

        {/* Services Section */}
        <section className="px-6">
          <motion.h3
            className="text-3xl font-bold text-blue-700 text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => toggleDetails(index)}
              >
                <div className="flex items-center justify-center mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-blue-800">
                  {service.title}
                </h4>
                {expandedIndex === index && (
                  <p className="mt-4 text-gray-600">{service.details}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
