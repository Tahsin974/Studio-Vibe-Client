import Marquee from "react-fast-marquee";
import { BiSliderAlt } from "react-icons/bi";
import { FaVolumeUp } from "react-icons/fa";
import { IoMdMicrophone } from "react-icons/io";

const About = () => {
  return (
    <div className="hero pb-40 pt-28 bg-[#000000] text-white min-h-screen ">
      <div className="hero-content about-content  max-w-7xl  ">
        <div>
          <h1 className=" bg-gradient-to-r from-cyan-300 to-violet-700 bg-clip-text text-transparent lg:text-5xl text-3xl font-bold">
            STUDIOVIBE ✦ <br />
            YOUR SOUND, AMPLIFIED
          </h1>
          <p className="py-6 lg:text-md text-sm leading-7 font-serif">
            Welcome to StudioVibe, where sound meets innovation. We amplify the
            sound of artists, musicians, and music businesses through sonic
            branding, immersive audio experiences, and innovative digital
            strategies. Our expert producers, sound designers, and digital
            marketers leverage cutting-edge technology to deliver exceptional
            music production, mixing, mastering, and online promotion. With
            transparency and quality at our core, we guide you through every
            step of the creative process. Partner with StudioVibe to unleash
            your music's power and resonate with audiences worldwide
          </p>
          <button className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline rounded-4xl border-[#ff4b2b] text-white bg-gradient-to-r from-[#ff4b2b] via-[#ff416c] to-[#ff4b2b] apply-btn shadow-[#ff4b2b]">
            Apply Now
          </button>
        </div>
        <div className="   space-y-4   service-box-container ">
          <div
            id="service-box-1"
            className="card  max-w-96 rounded-4xl  bg-gray-300/10 lg:card-xl card-md shadow-sm p-4
          transition  duration-400 ease-in-out  hover:scale-110
          
          "
          >
            <div className="card-body text-center justify-center items-center  ">
              <IoMdMicrophone size={60} className="text-[#14f0ff]" />
              <h2 className="card-title">Music Production</h2>
              <p className="text-sm">
                From concept to final master, we bring your musical vision to
                life.
              </p>
            </div>
          </div>
          <div
            id="service-box-2"
            className="card max-w-72 py-5   bg-gray-300/10 lg:card-lg card-md shadow-sm rounded-4xl
          transition  duration-400 ease-in-out  hover:scale-110
          
          "
          >
            <div className="card-body text-center justify-center items-center">
              <BiSliderAlt size={50} className="text-[#ff9933]" />
              <h2 className="card-title">Mixing & Mastering</h2>
              <p className="text-sm">
                Achieve professional clarity and loudness with our expert audio
                engineers.
              </p>
            </div>
          </div>
          <div
            id="service-box-3"
            className="card max-w-72    bg-gray-300/10 lg:card-md card-md shadow-sm rounded-4xl
          transition  duration-400 ease-in-out  hover:scale-110
          "
          >
            <div className="card-body text-center justify-center items-center">
              <FaVolumeUp size={50} className="text-[#cc00ff]" />
              <h2 className="card-title">Sound Design</h2>
              <p className="text-sm">
                Craft unique soundscapes for games, films, and any multimedia
                project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
