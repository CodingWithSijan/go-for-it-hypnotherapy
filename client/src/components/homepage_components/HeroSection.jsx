import banner_image from "../../assets/landing_page/banner_1.jpg";
import { ReactTyped } from "react-typed";
import { FaCalendarAlt } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const HeroSection = () => {
  return (
    <section
      className=" bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banner_image})` }}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Go For It Hypnotherapy
        </h1>
        <p className="mt-4 text-10xl font-bold md:text-4xl text-white">
          <ReactTyped
            strings={[
              " Overcome the barriers.",
              "Quit smoking with confidence.",
              "Achieve lasting weight loss.",
              "Conquer anxiety and stress.",
              "Overcome your fears.",
              "Transform your life today.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </p>
        <button
          className="flex items-center justify-center mt-14 bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
          <NavLink to="/book_appointment">Book Appointment</NavLink>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
