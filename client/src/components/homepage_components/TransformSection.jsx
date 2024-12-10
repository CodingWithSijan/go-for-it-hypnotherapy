import transformSection_image from "../../assets/landing_page/banner_2.png";

const TransformSection = () => {
  return (
    <section className="py-16 bg-white text-[#1D2C60] ">
      <div className="container mx-auto text-center">
        <img
          src={transformSection_image}
          alt=""
          className="max-w-[60%] rounded-sm mx-auto h-[250px] my-2 border-white"
        />
        <h2 className="text-3xl md:text-4xl font-bold">Transform your mind.</h2>
        <p className="mt-4 w-[70vw] mx-auto text-[#545454]">
          By embracing the transformative power of hypnotherapy, you can
          reprogram your mind to break free from the patterns that have held you
          back, whether it’s anxiety, self-doubt, or unhealthy habits. Through
          deep relaxation and focused suggestion, you can unlock your mind’s
          full potential, creating a foundation of self-confidence, motivation,
          and clarity that empowers you to achieve your personal and
          professional goals. This powerful process allows you to transform
          negative thought patterns into positive, life-affirming beliefs,
          ultimately guiding you toward lasting change, growth, and a life of
          fulfillment and peace.
        </p>
      </div>
    </section>
  );
};

export default TransformSection;
