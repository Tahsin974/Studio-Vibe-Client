import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import Pagetitle from "../../../Components/Pagetitle/Pagetitle";
import Title from "../../../Components/Title/Title";
import bgImg from "../../../assets/PageTitle/pageTitle.jpg";
import ContactForm from "../ContactForm/ContactForm";
import { IoMdMail } from "react-icons/io";
const ContactUsPage = () => {
  return (
    <div>
      <Title>Contact Us</Title>
      <Pagetitle BGimg={bgImg}>Contact Us</Pagetitle>
      <div className="hero bg-[#000000] text-white min-h-screen my-20 pb-28 max-w-[1200px] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            {/* get in touch */}
            <div>
              <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold">
                Get in touch
              </h1>
              <p className="py-6 text-lg">
                We are here to answer any question you may have. Feel free to
                reach via contact form.
              </p>
            </div>
            {/* Where To Find Us */}
            <div className="space-y-3.5">
              <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-rose-500 via-violet-600  to-violet-900 bg-clip-text text-transparent">
                Where To Find Us
              </h1>
              <h3 className="lg:text-3xl md:text-3xl text-xl font-bold pt-6 pb-3.5">
                BANGLADESH OFFICE : STUDIO VIBE
              </h3>
              <a
                href="https://maps.app.goo.gl/Xs5Z7EE51K8eb6sg6"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLocationArrow size={20} />
                <h1 className="text-xl ">
                  3/16 Block-F, Kalwalapara, Mirpur- 1, Dhaka- 1216
                </h1>
              </a>
              <h1 className="flex items-center gap-2">
                <IoMdMail size={20} />
                <span className="text-xl">studiovibe123@gmail.com</span>
              </h1>
              <h1 className="flex items-center gap-2">
                <FaPhoneAlt size={20} />
                <span className="text-xl">+880 1795-981096</span>
              </h1>
            </div>
          </div>
          <div className="lg:w-1/2 w-full p-3">
            <div className="card bg-[#000000] text-white  shadow-2xl">
              <div className="card-body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
