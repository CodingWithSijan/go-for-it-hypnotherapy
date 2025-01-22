import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import bannerImage from "../../assets/logo3.webp";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.8",
        }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Content Wrapper */}
      <motion.div
        className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-10xl font-extrabold mb-6 leading-tight text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          GO FOR IT HYPNOTHERAPY
        </motion.h1>

        {/* Animated Subtext */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ReactTyped
            className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]"
            strings={[
              "Overcome the barriers.",
              "Quit smoking with confidence.",
              "Achieve lasting weight loss.",
              "Conquer anxiety and stress.",
              "Transform your life today.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <NavLink
            to="/enquiry"
            className="inline-flex items-center justify-center  bg-yellow-400  border-1 border-black  text-black py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-lg font-semibold  hover:bg-purple-600 transition  transform hover:text-white hover:-translate-y-0.5"
          >
            <FaCalendarAlt className="mr-2" />
            Make an Enquiry
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
