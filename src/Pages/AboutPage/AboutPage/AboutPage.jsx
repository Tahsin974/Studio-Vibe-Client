import Pagetitle from "../../../Components/Pagetitle/Pagetitle";
import Title from "../../../Components/Title/Title";
import bgImg from "../../../assets/PageTitle/pageTitle.jpg";
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
    </div>
  );
};

export default AboutPage;
