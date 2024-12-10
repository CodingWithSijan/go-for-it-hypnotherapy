import how_it_works_bgImage from "../../assets/landing_page/bg_howitwork.png";

const Features = () => {
  const features = [
    {
      title: "Let's Meet",
      description:
        "Connect with us through a call or video to understand your requirements and goals.",
      icon: "💬",
    },
    {
      title: "Discover What You Need",
      description:
        "Discuss and identify the specific areas you want to focus on for your hypnotherapy treatment.",
      icon: "🔍",
    },
    {
      title: "Treatment",
      description:
        "Experience personalized hypnotherapy sessions tailored to help you achieve your desired outcomes.",
      icon: "🌟",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="py-16 bg-gray-100"
      style={{ backgroundImage: `url(${how_it_works_bgImage})` }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto space-x-8 w-full max-w-4xl">
          <h2 className="text-3xl text-white font-bold text-left flex-1">
            How it Works
          </h2>
          <h3 className="text-white text-sm text-right flex-1">
            At <b>“Go For It Hypnotherapy,”</b> Stella Dichiera uses
            hypnotherapy to help clients make lasting changes, such as quitting
            smoking or losing weight. Sessions are personalized, with services
            like the Virtual Gastric Band for weight loss, all delivered in
            person.
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:px-[6rem] px-[2rem]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#202939] text-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
