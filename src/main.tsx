import React from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./App";
import { StrictMode } from "react";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);