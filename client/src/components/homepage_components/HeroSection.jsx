import banner_image from "../../assets/landing_page/banner_1.jpg";
import { ReactTyped } from "react-typed";

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
        <p className="mt-4 text-10xl font-bold md:text-4xl text-blue-200">
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
      </div>
    </section>
  );
};

export default HeroSection;
