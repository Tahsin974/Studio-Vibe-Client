import Title from "../../../Components/Title/Title";
import About from "../About/About";
import Brands from "../Brands/Brands";
import ContactUs from "../ContactUs/ContactUs";
import Features from "../Features/Features";
import HomeBanner from "../Home-Banner/HomeBanner";
import Process from "../Mix-Mastering-Process/Process";
import PartnerSection from "../PartnerSection/PartnerSection";
import Testimonials from "../Testimonials/Testimonials";

import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Title>Home</Title>
      <HomeBanner />
      <About />
      <Brands />
      <WhyChooseUs />
      <Features />
      <PartnerSection />
      <Testimonials />
      <Process />
      <ContactUs />
    </div>
  );
};

export default Home;
