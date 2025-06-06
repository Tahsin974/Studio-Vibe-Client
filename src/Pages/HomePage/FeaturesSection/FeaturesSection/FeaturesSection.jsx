import Features from "../Features/Features";

const FeaturesSection = () => {
  return (
    <div className="hero bg-[#000000] text-white min-h-screen lg:py-20 md:py-20 py-6">
      <div className="hero-content text-center">
        <div className="max-w-7xl  ">
          <h1 className="bg-gradient-to-r from-cyan-300 via-violet-400 to-violet-700 bg-clip-text text-transparent lg:text-5xl text-3xl font-bold my-7 uppercase">
            Key Features of Our ✦ <br /> Mixing & Mastering Service
          </h1>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
