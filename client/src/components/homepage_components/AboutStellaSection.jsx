// src/components/homepage_components/StellaIntroduction.jsx
import stellaImage from "../../assets/landing_page/stella.jpg";

const StellaIntroduction = () => {
  const hypnotherapyBenefits = [
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
  ];

  const qualifications = [
    "Clinical Hypnotherapist",
    "Ego State Therapy",
    "NLP",
    "TimeLine Therapy",
    "Member of AACHP",
    "Accredited Clinical Supervisor",
    "Member of NHRA",
    "National Guild of Hypnotherapists",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 text-[#1D2C60]">
      <div className="container mx-auto text-center px-6">
        {/* Title Section */}
        <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[#1D2C60] animate__animated animate__fadeIn">
          Meet Stella Dichiera
        </h2>

        {/* Image Section */}
        <div className="flex justify-center mb-8">
          <img
            src={stellaImage}
            alt="Stella Dichiera"
            className="rounded-full w-40 h-40 mb-4 border-8 border-white shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          />
        </div>

        {/* Introduction Text */}
        <p className="mt-4 mx-auto text-lg text-gray-700 max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
          Stella Dichiera is a Clinical Hypnotherapist who can help you today!
          Hypnotherapy is an increasingly popular modality for individuals who
          are looking to improve themselves and make positive changes in their
          lives.
        </p>

        {/* Hypnotherapy Benefits */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-[#1D2C60] mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Hypnotherapy can assist with:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-600">
            {hypnotherapyBenefits.map((benefit, index) => (
              <li
                key={index}
                className="bg-white text-sm p-2 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 to-blue-500 text-gray-500 hover:text-white cursor-pointer"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Stella's Qualifications */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-[#1D2C60] mb-6 animate__animated animate__fadeIn animate__delay-3s">
            Stella&apos;s Qualifications:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-600">
            {qualifications.map((qualification, index) => (
              <li
                key={index}
                className="bg-white p-2 text-sm rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 to-blue-500 text-gray-500 hover:text-white cursor-pointer"
              >
                {qualification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StellaIntroduction;
