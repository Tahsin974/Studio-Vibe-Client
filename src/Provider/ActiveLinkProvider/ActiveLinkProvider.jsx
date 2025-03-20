import { createContext, useEffect, useState } from "react";

export const ActiveLinkContext = createContext(null);
const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "home"
  );
  const handleLinkChange = (linkName) => {
    setActiveLink(linkName);
  };
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

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
