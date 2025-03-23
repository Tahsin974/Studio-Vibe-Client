import Pagetitle from "../../../Components/Pagetitle/Pagetitle";
import Title from "../../../Components/Title/Title";
import bgImg from "../../../assets/PageTitle/pageTitle.jpg";
import EmpowermentSection from "../EmpowermentSection/EmpowermentSection";
import MissionSection from "../MissionSection/MissionSection";
import VisionSection from "../VisionSection/VisionSection";
const AboutPage = () => {
  return (
    <div>
      <Title>About</Title>
      <Pagetitle
        BGimg={bgImg}
        subHeading={
          "We provide artists and labels with the essential tools to thrive in the expanding digital music industry."
        }
      >
        About us
      </Pagetitle>
      <div className="my-20 pb-28 max-w-[1200px] mx-auto">
        <EmpowermentSection />
        <MissionSection />
        <VisionSection />
      </div>
    </div>
  );
};

export default AboutPage;
