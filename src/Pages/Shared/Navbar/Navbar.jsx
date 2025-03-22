import { useRef } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaFingerprint } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import logo from "../../../assets/Logo/Studio_Vibe_Logo2.png";
import useAuthContext from "../../../Context/useAuthContext";
import useActiveLinkContext from "../../../Context/useActiveLinkContext";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const { user, userLogOut, setUser } = useAuthContext();
  // using Active Link Context
  const { activeLink, handleLinkChange } = useActiveLinkContext();

  const navigate = useNavigate();
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
          to="/home"
          className={`duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 ${
            (activeLink === "/home" && "bg-white text-black") ||
            (activeLink === "/" && "bg-white text-black")
          } `}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className={`duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 service ${
            activeLink === "/services" && "bg-white text-black"
          }`}
        >
          Services
          <div className="service-dropdown bg-transparent cursor-auto absolute top-0  left-0 ">
            <ul className=" flex-col  mt-12  rounded-lg  bg-black/75 py-10 px-3 w-56 text-white">
              <li>
                <Link
                  onClick={() => handleLinkChange("/services")}
                  className="font-light hover:text-green-300"
                >
                  Music Production
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkChange("/services")}
                  className="font-light hover:text-green-300"
                >
                  Mixing & Mastering
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkChange("/services")}
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
          to="/artist-directory"
          className={`duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 ${
            activeLink === "/artist-directory" && "bg-white text-black"
          }`}
        >
          Artist Directory
        </Link>
      </li>
      <li>
        <Link
          to="/contact-us"
          className={`duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 ${
            activeLink === "/contact-us" && "bg-white text-black"
          }`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={` duration-200 hover:bg-white hover:text-black rounded-lg lg:px-3 lg:py-2 py-3 px-4 ${
            activeLink === "/about" && "bg-white text-black"
          }`}
        >
          About
        </Link>
      </li>
    </>
  );

  const handleLogOut = (e) => {
    e.preventDefault();
    userLogOut().then(() => {
      setUser(null);
      navigate("/home");
    });
  };

  // console.log(user);
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
        <div className="navbar lg:px-28 md:px-10  fixed top-0 bg-transparent lg:absolute z-20 text-white my-8 items-center justify-center ">
          <div className="navbar-start lg:mx-0 ms-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost active:bg-transparent active:border-transparent"
              >
                <CgMenuGridR className="text-red-600" size={30} />
              </label>
            </div>
            <Link
              to="/home"
              className="btn btn-ghost hover:bg-transparent hover:border-transparent hover:shadow-none lg:text-3xl md:text-3xl text-xl lg:mx-0 mx-auto"
            >
              <img
                src={logo}
                alt="brand logo"
                className="lg:w-28 lg:h-28 md:h-28 md:w-28 sm:w-20 sm:h-20 h-16 w-16"
              />
            </Link>
          </div>
          <div className="navbar-center navbar-animation hidden lg:flex">
            <ul className="px-1 menu menu-horizontal text-xl font-semibold space-x-3">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <details className="dropdown dropdown-end">
                <summary className=" m-1 btn btn-ghost btn-circle avatar sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                  <div className=" rounded-full ring-primary ring-offset-base-100  ring ring-offset-2">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 lg:w-60 md:w-60 p-2 shadow-sm text-black">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </details>
            ) : (
              <Link to="/login">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r from-[#FF6FD8]  to-[#3813C2] text-white rounded-3xl border-none shadow-none">
                  <FaFingerprint />
                  Client Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-20 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-neutral-900 text-white min-h-full w-80 p-5">
          <div className="ms-auto my-5">
            <button
              onClick={closeDrawer}
              className="btn btn-circle bg-transparent border-transparent text-white shadow-none"
            >
              <IoMdClose size={30} />
            </button>
          </div>
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

/* <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div> */
