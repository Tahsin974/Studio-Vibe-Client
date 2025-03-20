import { Link } from "react-router";
import logo from "../../../assets/Logo/Studio_Vibe_Logo2.png";
import Wave from "react-wavify";
import useActiveLinkContext from "../../../Context/useActiveLinkContext";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // using Active Link Context
  const { handleLinkChange } = useActiveLinkContext();
  const UsefulLinksOptions = (
    <>
      <ul className="space-y-3.5 text-gray-400 text-lg font-semibold ">
        <li>
          <Link className="  hover:text-white">Distribution Agreement</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Audio & Other Legal Issues</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Artist Branding</Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkChange("about")}
            className="  hover:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkChange("contact")}
            className="  hover:text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
  const LegalOptions = (
    <>
      <ul className="space-y-3.5 text-gray-400 text-lg font-semibold ">
        <li>
          <Link className="  hover:text-white">Privacy Policy</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Terms & Conditions</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Refund Policy</Link>
        </li>
      </ul>
    </>
  );
  const CommunityOptions = (
    <>
      <ul className="space-y-3.5 text-gray-400 text-lg font-semibold ">
        <li>
          <Link className="  hover:text-white">YouTube</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Facebook</Link>
        </li>
        <li>
          <Link className="  hover:text-white">Twitter</Link>
        </li>
      </ul>
    </>
  );
  const ServiceOptions = (
    <>
      <ul className="space-y-3.5 text-gray-400 text-lg font-semibold ">
        <li>
          <Link
            onClick={() => handleLinkChange("services")}
            className="  hover:text-white"
          >
            Music Production
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkChange("services")}
            className="  hover:text-white"
          >
            Mixing & Mastering
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkChange("services")}
            className="  hover:text-white"
          >
            Sound Design
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <div className="relative">
      <footer className="footer lg:footer-horizontal bg-[#171720] text-white grid-rows-2 lg:p-10 px-5 py-10  ">
        <nav>
          <h6 className=" text-xl font-semibold text-white">Community</h6>
          {CommunityOptions}
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">
            Legal Agreements
          </h6>
          {LegalOptions}
        </nav>
        <nav className="row-span-2">
          <h6 className="text-xl font-semibold text-white">Services</h6>
          {ServiceOptions}
        </nav>

        <nav className="row-span-2">
          <h6 className=" text-xl font-semibold text-white">Useful Links</h6>
          {UsefulLinksOptions}
        </nav>
        <nav className="row-span-2">
          <div className="card card-sm lg:w-80 md:w-80 sm:w-80 w-64 bg-transparent  border-2 border-gray-600 ">
            <div className="lg:px-10 lg:pt-10 md:px-10 md:pt-10 px-5 pt-5">
              <div className="bg-black w-52 p-5 flex gap-4  items-center justify-center rounded-full">
                <img src={logo} alt="" className="w-12" />
                <h1 className="text-lg font-bold">Studio Vibe</h1>
              </div>
            </div>
            <div className="card-body items-center text-center">
              <p className="text-gray-400 font-semibold font-serif text-sm/6">
                It is an independent music rights management and intermediary
                publishing company, distinguished as the first digital content
                anti-piracy company in Bangladesh.
              </p>
              <div className="justify-end card-actions mt-2 gap-4">
                <a>
                  <FaTwitter size={20} />
                </a>
                <a>
                  <FaInstagram size={20} />
                </a>
                <a>
                  <FaLinkedin size={20} />
                </a>
                <a>
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal bg-[#171720] text-white items-center lg:p-10">
        <aside className="grid-flow-col items-center">
          <p>
            {new Date().getFullYear()} Copyright © - All Right Reserved By
            Studio Vibe
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end lg:justify-self-end justify-self-center">
          <a>
            <FaTwitter size={30} />
          </a>
          <a>
            <FaYoutube size={30} />
          </a>
          <a>
            <FaFacebookF size={30} />
          </a>
        </nav>
      </footer>
      <Wave
        fill="#171720"
        paused={false}
        className="absolute -top-32 z-0"
        style={{ display: "flex" }}
        options={{
          height: 50,
          amplitude: 30,
          speed: 0.25,
          points: 4,
        }}
      />
    </div>
  );
};

export default Footer;
