import video from "../../../assets/About/About .mp4";
const MissionSection = () => {
  return (
    <div>
      <div className="hero bg-transparent text-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="lg:w-[560px] md:w-[560px] lg:h-[315px] md:h-[315px] sm:w-[415px] sm:h-[300px] w-auto h-[215px] rounded-3xl"
            preload="metadata"
            fetchPriority="high"
          ></video>
          <div>
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-700 bg-clip-text text-transparent">
              Our Mission
            </h1>
            <p className="py-6 lg:text-xl md:text-xl text-lg">
              Our mission is to make music distribution accessible, affordable,
              and transparent for all musicians. We are committed to breaking
              barriers and providing artists and labels with the necessary tools
              and resources to thrive in the global music industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
