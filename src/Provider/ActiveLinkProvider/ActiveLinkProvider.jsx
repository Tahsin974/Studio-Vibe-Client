import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const ActiveLinkContext = createContext(null);
const ActiveLinkProvider = ({ children }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || location.pathname
  );
  const handleLinkChange = (linkName) => {
    setActiveLink(linkName);
  };
  useEffect(() => {
    setActiveLink(location.pathname);
    localStorage.setItem("activeLink", location.pathname);
  }, [location.pathname]);

  const AllContent = {
    activeLink,
    handleLinkChange,
  };
  return (
    <ActiveLinkContext.Provider value={AllContent}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export default ActiveLinkProvider;
