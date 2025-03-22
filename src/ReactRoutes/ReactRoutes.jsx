import { Route, Routes } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import ArtistDirectory from "../Pages/ArtistDirectoryPage/ArtistDirectory/ArtistDirectory";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage/ContactUsPage";
import ServicePage from "../Pages/ServicePage/ServicePage/ServicePage";
import AboutPage from "../Pages/AboutPage/AboutPage/AboutPage";
import LoginPage from "../Pages/LoginPage/LoginPage/LoginPage";
import HomePage from "../Pages/HomePage/HomePage/HomePage";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="artist-directory" element={<ArtistDirectory />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
