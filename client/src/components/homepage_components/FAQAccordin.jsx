import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQAccordin = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is hypnotherapy?",
      answer:
        "Hypnotherapy is a therapeutic technique that uses hypnosis to create a state of focused attention and increased suggestibility.",
    },
    {
      question: "Is hypnotherapy safe?",
      answer:
        "Yes, hypnotherapy is completely safe when conducted by a qualified professional. You remain in control throughout the session.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on individual needs and goals. Usually, significant progress can be seen within 3-6 sessions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className="w-full p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 rounded-b-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQAccordin;
