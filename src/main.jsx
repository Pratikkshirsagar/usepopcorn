import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StartRating from "./StartRaing";
// import App from "./App.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StartRating />
  </StrictMode>
);
