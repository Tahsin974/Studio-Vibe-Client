import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

const TestimonialsSection = () => {
  // const { data: testimonials = [] } = useQuery({
  //   queryKey: ["testimonials"],
  //   queryFn: async () => {
  //     const res = await axios.get("");
  //     return res.data;
  //   },
  // });
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios.get("testimonials.json").then((res) => setTestimonials(res.data));
  }, []);
  return (
    <div className="hero bg-[#111111] min-h-screen text-white py-20 my-32">
      <div className="hero-content  text-center ">
        <div className="lg:max-w-7xl md:max-w-6xl sm:max-w-4xl  xs:max-w-sm max-w-xs space-y-16">
          <h1 className=" bg-gradient-to-r from-cyan-300 via-violet-400 to-violet-700 bg-clip-text text-transparent lg:text-5xl text-3xl font-bold text-center">
            WHAT OUR COMMUNITY HAS TO SAY ABOUT <br /> ✦ WORKING WITH US.
          </h1>
          <div className="testimonials mx-auto">
            <Marquee>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
