import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import EnquiryForm from "../components/enquiry/EnquiryForm";
import backgroundImg from "../assets/landing_page/image_1.png";
const Enquiry = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Header />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Enquiry;
