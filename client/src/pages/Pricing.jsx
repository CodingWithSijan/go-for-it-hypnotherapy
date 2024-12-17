import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Quit Smoking / Quit Vaping",
      price: "$150",
      duration: "1 hour 30 minutes",
      description:
        "Effective hypnotherapy to help you quit smoking or vaping for good.",
    },
    {
      title: "Weight Loss",
      price: "$150",
      duration: "1 hour 30 minutes",
      description: "Personalized hypnotherapy for sustainable weight loss.",
    },
    {
      title: "Anxiety / Stress Management",
      price: "$150",
      duration: "1 hour 30 minutes",
      description:
        "Overcome anxiety and manage stress with calming techniques.",
    },
    {
      title: "Group Sessions",
      price: "Contact for pricing",
      duration: "Flexible",
      description: "Join group sessions for weight loss and support programs.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-8">
            Affordable Pricing Plans
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our competitive pricing for hypnotherapy sessions. Stella is
            here to guide you toward a healthier, happier you.
          </p>
        </motion.section>

        {/* Pricing Plans */}
        <section className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-8 text-center transform hover:scale-105 transition duration-300 border-2 border-transparent hover:border-blue-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  {plan.title}
                </h2>
                <p className="text-4xl font-extrabold text-blue-600 mb-2">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-4">{plan.duration}</p>
                <p className="text-gray-700">{plan.description}</p>
                <motion.a
                  href="/book"
                  className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Book Now
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ Section */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-blue-800 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto text-gray-700">
            <p className="mb-4">
              <strong>Q: What happens during a session?</strong>
              <br />
              A: Stella will guide you through a relaxing and transformative
              hypnotherapy process tailored to your needs.
            </p>
            <p className="mb-4">
              <strong>Q: Are there discounts for group sessions?</strong>
              <br />
              A: Yes, please contact Stella directly for group session pricing.
            </p>
            <p>
              <strong>Q: How can I book a session?</strong>
              <br />
              A: Use the "Book Now" button above or call Stella directly for
              assistance.
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
