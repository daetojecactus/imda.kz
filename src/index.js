import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import "./fonts/OktaNeue-Bold.woff";
import "./fonts/OktaNeue-Bold.woff2";
import "./fonts/OktaNeue-Light.woff";
import "./fonts/OktaNeue-Light.woff2";
import "./fonts/OktaNeue-Regular.woff";
import "./fonts/OktaNeue-Regular.woff2";
import "./settings.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
