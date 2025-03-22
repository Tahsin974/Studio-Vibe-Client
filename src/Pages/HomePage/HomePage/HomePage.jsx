import Title from "../../../Components/Title/Title";
import AboutSection from "../AboutSection/AboutSection";
import BrandsSection from "../BrandsSection/BrandsSections";
import FeaturesSection from "../FeaturesSection/FeaturesSection/FeaturesSection";
import HomeBanner from "../Home-Banner/HomeBanner";
import PartnerSection from "../PartnerSection/PartnerSection";
import ProcessSection from "../ProcessSection/ProcessSection";
import SendMessageSection from "../SendMessageSection/SendMessageSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";

const HomePage = () => {
  return (
    <div>
      <Title>Home</Title>
      <HomeBanner />
      <AboutSection />
      <BrandsSection />
      <WhyChooseUsSection />
      <FeaturesSection />
      <PartnerSection />
      <TestimonialsSection />
      <ProcessSection />
      <SendMessageSection />
    </div>
  );
};

export default HomePage;
