import { useState } from "react";

const FAQAccordin = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    { question: "What is hypnotherapy?", answer: "Hypnotherapy is..." },
    { question: "How can it help me?", answer: "It helps by..." },
    { question: "Is it safe?", answer: "Yes, hypnotherapy is safe..." },
  ];

  return (
    <section id="faq" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold">{faq.question}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordin;
