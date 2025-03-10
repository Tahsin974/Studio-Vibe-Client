import Wave from "react-wavify";
import videoBG from "../../../assets/bg-video.mp4";
import { useEffect, useState } from "react";
import { MdElectricBolt } from "react-icons/md";

const HomeBanner = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    // Same substring at the start will only be typed out once, initially
    "SOUND",
    "VIBE",
    "PULSE",
    "BOOST",
    "TONE",
    "SYNC",
    "IMPACT",
    "CORE",
  ];
  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [index]);

  return (
    <div className="relative overflow-hidden">
      <div className=" hero ">
        <video
          src={videoBG}
          autoPlay
          loop
          muted
          className="w-full object-cover min-h-screen"
        ></video>
        <div className="hero-overlay bg-black/60"></div>
        <div className="hero-content text-neutral-content text-center z-10 p-0">
          <div className="lg:space-y-7 space-y-3">
            <h1 className="lg:text-6xl text-4xl font-bold flex justify-center">
              <MdElectricBolt />{" "}
              <p className="text-animation">{texts[index]}</p>
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              Elevate your music. Expand your reach. Create sound that moves.
            </p>
            <button className=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline rounded-4xl border-[#ff4b2b] text-white bg-gradient-to-r from-[#ff4b2b] via-[#ff416c] to-[#ff4b2b] apply-btn shadow-[#ff4b2b]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <Wave
        fill="#000000"
        paused={false}
        className="absolute bottom-0"
        style={{ display: "flex" }}
        options={{
          height: 50,
          amplitude: 30,
          speed: 0.25,
          points: 4,
        }}
      />
    </div>
  );
};

export default HomeBanner;
