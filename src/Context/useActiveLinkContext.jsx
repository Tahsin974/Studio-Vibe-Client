import { useContext } from "react";
import { ActiveLinkContext } from "../Provider/ActiveLinkProvider/ActiveLinkProvider";

const useActiveLinkContext = () => {
  return useContext(ActiveLinkContext);
};

export default useActiveLinkContext;
