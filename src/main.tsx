import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/reset.css";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig.ts";

const msalInstance = new PublicClientApplication(msalConfig as Configuration);
await msalInstance.initialize();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App instance={msalInstance} />
    </BrowserRouter>
  </StrictMode>
);
