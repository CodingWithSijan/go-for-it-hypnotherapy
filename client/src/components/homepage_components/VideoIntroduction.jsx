// src/components/VideoIntroduction.jsx
import stella_video from "../../assets/stella_video.mp4";
const VideoIntroduction = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-900 to-[#202939] text-white">
      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Container for the video and text */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
          Discover the Power of Hypnotherapy with Stella
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Watch this short video to learn about how hypnotherapy can help you
          achieve your goals and make lasting changes in your life.
        </p>

        {/* Video Wrapper with Play Button */}
        <div className="relative inline-block">
          <a
            href="https://www.youtube.com/watch?v=mMNEDv5ilrE&t=8s"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-[60vw] h-72 md:h-96 bg-gray-800 rounded-xl overflow-hidden">
             <video
              className="w-full h-full"
              controls
              autoPlay
              muted
            >
              <source src={stella_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
