import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {  NavProvider } from "./context/NavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavProvider>
    <App />
  </NavProvider>
);
