import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";

const Navbar = ({ children }) => {
  const navOptions = (
    <>
      <li>
        <Link className="duration-200 hover:bg-white hover:text-black rounded-2xl p-2">
          Home
        </Link>
      </li>
      <li>
        <Link className="duration-200 hover:bg-white hover:text-black rounded-2xl p-2 service">
          Services
          <div className="service-dropdown bg-transparent cursor-auto absolute top-0  left-0 ">
            <ul className=" flex-col  mt-12  rounded-lg  bg-black/75 py-10 px-3 w-56 text-white">
              <li>
                <Link className="font-light hover:text-green-300">
                  Music Production
                </Link>
              </li>
              <li>
                <Link className="font-light hover:text-green-300">
                  Mixing & Mastering
                </Link>
              </li>
              <li>
                <Link className="font-light hover:text-green-300">
                  Sound Design
                </Link>
              </li>
            </ul>
          </div>
        </Link>
      </li>
      <li>
        <Link className="duration-200 hover:bg-white hover:text-black rounded-2xl p-2">
          Artist Directory
        </Link>
      </li>
      <li>
        <Link className="duration-200 hover:bg-white hover:text-black rounded-2xl p-2">
          Contact
        </Link>
      </li>
      <li>
        <Link className=" duration-200 hover:bg-white hover:text-black rounded-2xl p-2">
          About
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-transparent absolute z-20 text-white my-8 animation">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <GiHamburgerMenu />
            </label>
          </div>
          <div className="hidden mx-auto flex-none lg:block">
            <ul className="menu menu-horizontal text-xl font-bold space-x-3">
              {navOptions}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
