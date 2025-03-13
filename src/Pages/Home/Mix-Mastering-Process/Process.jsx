import {
  FaAngleRight,
  FaFileDownload,
  FaFileUpload,
  FaVolumeUp,
} from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

const Process = () => {
  return (
    <div className="hero bg-[#000000]  text-white  lg:py-20 md:py-20 py-12 my-32">
      <div className="hero-content text-center text-black">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2  gap-6">
          <div className="card process-card transition  duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 card-animation bg-[#000000] text-white max-w-96 shadow-sm ">
            <figure className=" bg-[#0D252C] p-2 w-20 h-20 rounded-full mx-auto">
              <FaFileUpload size={40} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Upload Tracks</h2>
              <p className="text-lg font-light">
                Easily upload your individual audio tracks (stems) to our secure
                platform. Supported formats include WAV, AIFF, and more.
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-light ">
                  Learn More
                  <FaAngleRight className="text-indigo-800" size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="card process-card transition  duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 card-animation bg-[#000000] text-white max-w-96 shadow-sm ">
            <figure className=" bg-[#0D252C] p-2 w-20 h-20 rounded-full mx-auto">
              <FaSliders size={40} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Mixing Session</h2>
              <p className="text-lg font-light">
                Our experienced engineers will professionally balance levels,
                EQ, compression, and effects to create a cohesive and impactful
                mix. We'll work with you to achieve your vision.
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-light ">
                  Learn More
                  <FaAngleRight className="text-indigo-800" size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="card process-card transition  duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 card-animation bg-[#000000] text-white max-w-96 shadow-sm ">
            <figure className=" bg-[#0D252C] p-2 w-20 h-20 rounded-full mx-auto">
              <FaVolumeUp size={40} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Mastering Process</h2>
              <p className="text-lg font-light">
                Your mixed track will undergo mastering to optimize it for
                commercial release. We'll enhance loudness, clarity, and overall
                sonic quality for various playback systems.
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-light ">
                  Learn More
                  <FaAngleRight className="text-indigo-800" size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="card process-card transition  duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 card-animation bg-[#000000] text-white max-w-96 shadow-sm ">
            <figure className=" bg-[#0D252C] p-2 w-20 h-20 rounded-full mx-auto">
              <FaFileDownload size={40} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">Download Master</h2>
              <p className="text-lg font-light">
                Once approved, you can download your high-quality,
                professionally mastered track in your desired format. Ready for
                distribution or streaming!
              </p>
              <div className="card-actions mt-3">
                <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-light ">
                  Learn More
                  <FaAngleRight className="text-indigo-800" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
