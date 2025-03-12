import About from "../About/About";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import HomeBanner from "../Home-Banner/HomeBanner";
import PartnerSection from "../PartnerSection/PartnerSection";
import Testimonials from "../Testimonials/Testimonials";

import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Brands />
      <WhyChooseUs />
      <Features />
      <PartnerSection />
      <Testimonials />
    </div>
  );
};

export default Home;
