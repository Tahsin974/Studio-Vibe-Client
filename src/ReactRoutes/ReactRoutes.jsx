import { Route, Routes } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import ArtistDirectory from "../Pages/ArtistDirectory/ArtistDirectory/ArtistDirectory";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="artist-directory" element={<ArtistDirectory />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
