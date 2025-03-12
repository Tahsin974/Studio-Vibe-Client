import partnerImg from "../../../assets/Preferred-Partner-Studio-Vibe.webp";
const PartnerSection = () => {
  return (
    <div className="hero bg-[#111623] text-white min-h-screen my-32 rounded-3xl shadow-xl shadow-sky-800 py-20">
      <div className="hero-content gap-14 flex-col lg:flex-row items-center">
        <img src={partnerImg} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div className="space-y-4 lg:text-left text-center">
          <div className="p-3 bg-gradient-to-r from-amber-100  to-violet-200 rounded-4xl w-32 mx-auto lg:mx-0">
            <p className="text-center text-black font-semibold">Studio Vibe</p>
          </div>
          <h1 className="bg-gradient-to-r from-cyan-300 via-violet-400 to-violet-700 bg-clip-text text-transparent lg:text-5xl text-3xl font-bold my-7 uppercase">
            A Trusted Global Partner
          </h1>
          <p className="py-6 lg:text-lg md:text-lg text-sm leading-7 font-serif">
            Join the world's leading artists, labels and music companies
            thriving with STUDIO VIBE. As a preferred provider for TikTok, Vevo,
            and the local DSP Shadhin Music, we help you succeed in the Music
            3.0 era—maximizing your catalog’s potential and expanding your
            global distribution reach.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-neutral-950 text-white border-black shadow shadow-cyan-300 transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800 hover:border-indigo-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
