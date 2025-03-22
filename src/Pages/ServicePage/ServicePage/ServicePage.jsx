import Title from "../../../Components/Title/Title";
import Pagetitle from "../../../Components/Pagetitle/Pagetitle";
import bgImg from "../../../assets/PageTitle/pageTitle.jpg";
import Services from "../Services/Services";

const ServicePage = () => {
  return (
    <>
      {/* title and page title */}
      <div>
        <Title>Services</Title>
        <Pagetitle BGimg={bgImg}>Our Services</Pagetitle>
      </div>
      {/* services*/}
      <Services />
    </>
  );
};

export default ServicePage;
