import React from "react";
import "./App.css";

import Loginbar from "./components/loginbar/loginbar.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";

function App() {
  return (
    <div className="App">
      <Loginbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
