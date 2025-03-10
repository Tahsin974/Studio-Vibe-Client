import { Route, Routes } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
