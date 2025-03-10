import About from "../About/About";
import Brands from "../Brands/Brands";
import HomeBanner from "../Home-Banner/HomeBanner";

import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <About />
      <Brands />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
