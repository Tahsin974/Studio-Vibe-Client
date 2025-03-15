import { useRef, useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";

const Navbar = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkChange = (linkName) => {
    setActiveLink(linkName);
  };
  const drawerRef = useRef(null);
  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };
  const navOptions = (
    <>
      <li>
        <Link
          className={`duration-200 hover:bg-white hover:text-black rounded-2xl lg:p-2 py-3 px-4 ${
            activeLink === "home" && "bg-white text-black"
          } `}
          onClick={() => handleLinkChange("home")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleLinkChange("services")}
          className={`duration-200 hover:bg-white hover:text-black rounded-2xl lg:p-2 py-3 px-4 service ${
            activeLink === "services" && "bg-white text-black"
          }`}
        >
          Services
          <div className="service-dropdown bg-transparent cursor-auto absolute top-0  left-0 ">
            <ul className=" flex-col  mt-12  rounded-lg  bg-black/75 py-10 px-3 w-56 text-white">
              <li>
                <Link
                  onClick={() => handleLinkChange("services")}
                  className="font-light hover:text-green-300"
                >
                  Music Production
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkChange("services")}
                  className="font-light hover:text-green-300"
                >
                  Mixing & Mastering
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkChange("services")}
                  className="font-light hover:text-green-300"
                >
                  Sound Design
                </Link>
              </li>
            </ul>
          </div>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleLinkChange("artists")}
          className={`duration-200 hover:bg-white hover:text-black rounded-2xl lg:p-2 py-3 px-4 ${
            activeLink === "artists" && "bg-white text-black"
          }`}
        >
          Artist Directory
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleLinkChange("contact")}
          className={`duration-200 hover:bg-white hover:text-black rounded-2xl lg:p-2 py-3 px-4 ${
            activeLink === "contact" && "bg-white text-black"
          }`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          onClick={() => handleLinkChange("about")}
          className={` duration-200 hover:bg-white hover:text-black rounded-2xl lg:p-2 py-3 px-4 ${
            activeLink === "about" && "bg-white text-black"
          }`}
        >
          About
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerRef}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-transparent absolute z-20 text-white my-8 items-center justify-center ">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <GiHamburgerMenu size={25} />
              </label>
            </div>
            <Link className="btn btn-ghost hover:bg-transparent hover:border-transparent hover:shadow-none lg:text-3xl md:text-3xl text-xl">
              Studio Vibe
            </Link>
          </div>
          <div className="navbar-center animation hidden lg:flex">
            <ul className="px-1 menu menu-horizontal text-xl font-bold space-x-3">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#3337E0]  to-[#BE224D] text-white rounded-3xl">
              <FaFingerprint />
              Client Login
            </button>
          </div>
        </div>
        {/* <div className="navbar bg-transparent absolute z-20 text-white my-8 items-center">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <GiHamburgerMenu size={25} />
            </label>
          </div>
          <div>
            <h1 className="navbar-start text-2xl font-bold">Studio Vibe</h1>
          </div>
          <div className="navbar-center hidden  lg:flex animation">
            <ul className="menu menu-horizontal text-xl font-bold space-x-3">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              Responsive
            </button>
          </div>
        </div> */}
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <div className="ms-auto my-5">
            <button onClick={closeDrawer} className="btn btn-circle">
              X
            </button>
          </div>
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
