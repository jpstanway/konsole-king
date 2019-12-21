import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Loginbar from "./components/loginbar/loginbar.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import RegisterLogin from "./pages/register-login/register-login.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Loginbar />
      <Header />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/register-login" render={() => <RegisterLogin />} />
      <Footer />
    </div>
  );
}

export default App;
