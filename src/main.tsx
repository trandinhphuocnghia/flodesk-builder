import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GrainProvider } from "@flodesk/grain";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GrainProvider>
        <App />
      </GrainProvider>
    </BrowserRouter>
  </StrictMode>,
);
