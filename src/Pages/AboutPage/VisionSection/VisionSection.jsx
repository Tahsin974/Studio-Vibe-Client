import img from "../../../assets/About/Vision.jpg";
const VisionSection = () => {
  return (
    <div>
      <div className="hero bg-transparent text-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <figure className="shadow-lg shadow-gray-400 rounded-lg">
            <img src={img} className="lg:max-w-md rounded-lg hover:grayscale" />
          </figure>
          <div>
            <p className="lg:text-lg md:text-lg text-base font-semibold bg-gradient-to-r from-blue-700  to-orange-900 bg-clip-text text-transparent">
              ✦ Trusted Experience
            </p>
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-700 bg-clip-text text-transparent">
              Our Vision
            </h1>
            <p className="py-6 lg:text-xl md:text-xl text-lg">
              Our vision is to revolutionize the music distribution landscape in
              Bangladesh by empowering independent artists and labels with
              comprehensive support and innovative solutions. We aim to be the
              leading force in promoting Southeast Asian music on a global stage
              while fostering an environment that values creativity, ownership,
              and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
