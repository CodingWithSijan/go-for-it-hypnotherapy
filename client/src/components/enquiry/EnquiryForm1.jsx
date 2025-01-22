import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import backgroundImg from "../../assets/landing_page/image_1.png";

const services = [
  "Quit Smoking",
  "Weight Loss (Virtual Gastric Banding)",
  "Weight Loss Group Classes",
  "Self Esteem & Confidence",
  "Anger Management",
  "Fears & Phobias",
  "Loss & Grief",
  "Motivation",
  "Stress & Anxiety",
  "Depression",
  "Public Speaking",
  "Other",
  "Follow Up Session",
];

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/enquiry", data);
      toast.success("Enquiry submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("Failed to submit enquiry. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <img
          src={backgroundImg}
          alt="Enquiry"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-teal-600 via-cyan-700 to-teal-600 text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full  bg-white p-8 rounded-lg shadow-lg text-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
            Enquiry Form
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Your Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Service</label>
            <select
              {...register("service", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
