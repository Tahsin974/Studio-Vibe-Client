import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayOut = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  console.log(isLogin);
  return (
    <div className="relative">
      {isLogin ? (
        <Outlet />
      ) : (
        <Navbar>
          <Outlet />
        </Navbar>
      )}

      {!isLogin && <Footer />}
    </div>
  );
};

export default MainLayOut;
