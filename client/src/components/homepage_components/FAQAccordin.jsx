import { useState } from "react";

const FAQAccordin = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is hypnotherapy, and how does it work?",
      answer:
        "Hypnotherapy is a therapeutic technique that uses relaxation and focused attention to help you achieve a heightened state of awareness, allowing positive suggestions to help overcome challenges or achieve goals.",
    },
    {
      question: " Is hypnotherapy safe?",
      answer:
        "Yes, hypnotherapy is completely safe. It is a natural state of deep relaxation, and you are always in control during the session.",
    },
    {
      question: "What issues can hypnotherapy help with?",
      answer:
        "We specialize in areas like smoking cessation, weight loss, anxiety, depression, motivation, and overcoming fears such as flying.",
    },
    {
      question: "How long is a typical session?",
      answer:
        "The duration depends on the service. For smoking cessation, sessions are typically 90 minutes. Weight loss and other issues may require multiple sessions.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "This depends on your specific needs and goals. Smoking cessation often requires one session, while weight loss or anxiety management may need multiple sessions for lasting results.",
    },
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
