import { FaAngleRight } from "react-icons/fa";
import "./ServiceCard.css";

const ServiceCard = ({ service, index }) => {
  const { title, description, icon, badge } = service;
  const COLORS = ["#DFFF00", "#FFBF00", "#FF00FF	", "#40E0D0", "#08a5ff"];
  const color = COLORS[index % COLORS.length];
  console.log(color);
  return (
    <div className="card max-w-96 card-animation card-xl  bg-[#060910]  shadow-2xl hover:shadow-slate-800 hover:bg-[#000000]  p-2 group">
      <div className="card-body space-y-2">
        <div className="flex items-center justify-between">
          <h1
            className="text-6xl transition  duration-500 ease-in-out group-hover:-translate-y-3 group-hover:scale-110 "
            style={{
              color: color,
            }}
          >
            <i className={`fas ${icon} `} />
          </h1>
          {badge ? (
            <div className="badge bg-gray-100 text-black">{badge}</div>
          ) : (
            <></>
          )}
        </div>
        <h2 className="card-title text-3xl transition  duration-500 delay-150 ease-in-out group-hover:-translate-y-2 group-hover:scale-105">
          {title}
        </h2>
        <p className="text-base/6 transition delay-300 duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:text-[#0a1d58] ">
          {description}
        </p>
        <div className="justify-center mt-5 card-actions">
          <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-semibold ">
            Explore More
            <FaAngleRight className="text-indigo-800" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

/* 
<div className="card card-animation max-w-96 bg-[#060910] h-[450px]  hover:shadow-pink-800  p-2 group">
        <div className="flex justify-center items-center px-10 pt-10">
          <h1
            className="text-6xl transition  duration-500 ease-in-out group-hover:-translate-y-6 group-hover:scale-110 "
            style={{
              color: color,
            }}
          >
            <i className={`fas ${icon} `} />
          </h1>
        </div>
        <div className="card-body items-center justify-center">
          <h2 className="card-title text-3xl transition  duration-500 delay-150 ease-in-out group-hover:-translate-y-6 group-hover:scale-105  ">
            {title}
          </h2>
          <p className="text-base/6 transition delay-300 duration-500 ease-in-out group-hover:-translate-y-6 group-hover:scale-105 ">
            {description}
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-semibold ">
              Explore More
              <FaAngleRight className="text-indigo-800" size={25} />
            </button>
          </div>
        </div>
      </div> */
