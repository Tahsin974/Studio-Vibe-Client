import { useEffect, useState } from "react";
import { Link } from "react-router";
import Wave from "react-wavify";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "home"
  );
  const handleLinkChange = (linkName) => {
    setActiveLink(linkName);
  };
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
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);
  return (
    <div className="relative">
      <footer className="footer sm:footer-horizontal bg-[#171720] text-white grid-rows-2 p-10">
        <nav>
          <h6 className="text-xl font-semibold text-white">Services</h6>
          {ServiceOptions}
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className=" text-xl font-semibold text-white">Apps</h6>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
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
