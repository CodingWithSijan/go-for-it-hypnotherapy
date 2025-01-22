import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Initial Consultation",
      price: "$150",
      duration: "2 hours",
      description:
        "2 hours consultation on most issues such as Anxiety, Insomnia, Phobias, Relationship etc.",
    },
    {
      title: "Follow Up Sessions",
      price: "$80",
      duration: "1 hour 30 minutes",
      description: "Any follow up sessions for one hour (on any subject)",
    },
    {
      title: "Quit Smoking or Quit Vaping",
      price: "$300",
      duration: "2 hours",
      description: "2 hour consultation for Quit Smoking or Quit Vaping",
    },
    {
      title: "Weight Loss",
      price: "$320",
      duration: "4 hours",
      description: "4 one hour sessions for Weight Loss",
    },
    {
      title: "For Other Services",
      price: "Contact Stella",
      description: "For any other services, please contact Stella for a quote.",
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
          <h1 className="text-5xl font-extrabold text-transparent text-yellow-600 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-4">
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
                className="bg-white shadow-md rounded-lg p-8 text-center transform hover:scale-105 transition duration-300 border-2 border-transparent hover:border-blue-500 flex flex-col justify-between"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                    {plan.title}
                  </h2>
                  <p className="text-4xl font-extrabold text-yellow-600 mb-2">
                    {plan.price}
                  </p>
                  <p className="text-gray-600 mb-4">{plan.duration}</p>
                  <p className="text-gray-700">{plan.description}</p>
                </div>
                <motion.a
                  href="/enquiry"
                  target="_blank"
                  className="inline-block mt-6 bg-yellow-500 text-white font-bold leading-tight  drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Enquire Now
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
