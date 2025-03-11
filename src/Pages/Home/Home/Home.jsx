import About from "../About/About";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import HomeBanner from "../Home-Banner/HomeBanner";
import PartnerSection from "../PartnerSection/PartnerSection";

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
    </div>
  );
};

export default Home;
