import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { RatingContextProvider } from "./store/rating-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RatingContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </RatingContextProvider>
);
