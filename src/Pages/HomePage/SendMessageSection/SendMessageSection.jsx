import { useEffect, useState } from "react";
import { Link } from "react-router";

const SendMessageSection = () => {
  const [index, setIndex] = useState(0);

  const texts = [
    // Same substring at the start will only be typed out once, initially
    "Talk",
    "Chat",
    "Work",
  ];
  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(interval);
  }, [index]);
  return (
    <div className="hero bg-[#000000] text-white lg:py-28 my-32">
      <div className="hero-content text-center ">
        <div className=" lg:flex lg:space-y-0 space-y-11 items-center justify-items-center">
          <div className="flex lg:text-7xl md:text-6xl  text-5xl font-bold gap-4 ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Let's
            </h1>{" "}
            <span className="text-animation bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              {texts[index]}
            </span>
          </div>
          <div className=" border-b border-2 border-white mx-4 w-40"></div>
          <Link to="/contact-us">
            <button className="btn btn-lg xl:btn-xl btn-ghost  hover:bg-transparent hover:border-transparent hover:shadow-none text-fuchsia-50 font-bold text-6xl uppercase">
              send message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SendMessageSection;
