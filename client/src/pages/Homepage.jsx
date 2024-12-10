import Header from "../components/common_components/Header";
import HeroSection from "../components/homepage_components/HeroSection";
import Features from "../components/homepage_components/Features";
import TransformSection from "../components/homepage_components/TransformSection";
import FAQAccordin from "../components/homepage_components/FAQAccordin";
import AboutStellaSection from "../components/homepage_components/AboutStellaSection";

import Footer from "../components/common_components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <TransformSection />
      <AboutStellaSection />
      <FAQAccordin />
      <Footer />
    </div>
  );
};

export default Homepage;
