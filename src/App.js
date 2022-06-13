import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutPage from "./Components/pages/AboutPage/AboutPage";
import ContactPage from "./Components/pages/ContactPage/ContactPage";
import MainPage from "./Components/pages/MainPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
