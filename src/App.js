import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
