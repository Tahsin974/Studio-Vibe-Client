import img from "../../../assets/About/Empowerment.jpg";
const EmpowermentSection = () => {
  return (
    <div>
      <div className="hero bg-transparent text-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <figure className="shadow-lg shadow-gray-400 rounded-lg">
            <img src={img} className="lg:max-w-md rounded-lg hover:grayscale" />
          </figure>
          <div>
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold ">
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-700 bg-clip-text text-transparent">
                Empowering
              </span>{" "}
              🎸{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-700 bg-clip-text text-transparent">
                Independent Music
              </span>
            </h1>
            <p className="py-6 lg:text-xl md:text-xl text-lg">
              Studio Vibe is the first digital music distribution company in
              Bangladesh, established as a record label in 2018 and later
              transformed into a comprehensive digital music distribution
              platform. As the country’s leading music distributor, Studio Vibe
              empowers independent artists and labels by providing top-notch
              distribution and promotional services. With strategic
              partnerships, including being an official licensing partner with
              global streaming platforms and the renowned local platform Shadhin
              Music, Studio Vibe ensures unparalleled global reach for
              Bangladeshi artists and labels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentSection;
