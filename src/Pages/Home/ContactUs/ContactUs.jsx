import { useEffect, useState } from "react";

const ContactUs = () => {
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
    <div className="hero bg-[#000000] text-white  py-12 my-32">
      <div className="hero-content text-center ">
        <div>
          <div className="flex lg:text-7xl md:text-6xl sm:text-5xl text-2xl font-bold gap-4">
            <h1>Let's</h1>{" "}
            <span className="text-animation">{texts[index]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
