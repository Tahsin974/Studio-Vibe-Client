const WhyChooseUs = () => {
  return (
    <div className="hero bg-[#111623] text-white min-h-screen py-16">
      <div className="hero-content why-choose p-0">
        <div className="space-y-5 lg:text-left text-center">
          <h1 className=" bg-gradient-to-r from-cyan-300 via-violet-400 to-violet-700 bg-clip-text text-transparent lg:text-5xl text-3xl font-bold ">
            WHY CHOOSE US?
          </h1>
          <p className="py-6 lg:text-lg text-md leading-7 font-serif ">
            Distribute your music across multiple digital platforms and reach a
            wider audience. Keep 100% of your rights and receive royalties
            directly in your account. With our expert marketing and promotional
            strategies, gain the recognition you deserve in a competitive and
            growing industry.
          </p>
          <div className="grid lg:grid-cols-3  gap-4 max-w-sm mx-auto lg:mx-0">
            <div className="bg-[#232938] p-3 rounded-xl ">
              <p className="text-center font-semibold text-xs">REACH</p>
            </div>
            <div className="bg-[#232938] p-3 rounded-xl ">
              <p className="text-center text-xs font-semibold">ROYALTY</p>
            </div>
            <div className="bg-[#232938] p-3 rounded-xl ">
              <p className="text-center text-xs font-semibold">RECOGNITION</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-3xl lg:w-[560px] md:w-[560px] lg:h-[315px] md:h-[315px] sm:w-[415px] sm:h-[300px] w-auto h-[215px]"
            src="https://www.youtube.com/embed/fezKpDFKf5U?controls=0&autoplay=1&loop=1&playlist=fezKpDFKf5U&mute=1&modestbranding=1&rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
