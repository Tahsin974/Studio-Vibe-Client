import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import ReactRoutes from "./ReactRoutes/ReactRoutes";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import ActiveLinkProvider from "./Provider/ActiveLinkProvider/ActiveLinkProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ActiveLinkProvider>
        <AuthProvider>
          <ReactRoutes />
        </AuthProvider>
      </ActiveLinkProvider>
    </BrowserRouter>
  </StrictMode>
);
