import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayOut = () => {
  return (
    <div className="relative">
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </div>
  );
};

export default MainLayOut;
