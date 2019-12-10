import React from "react";
import "./App.css";

import Loginbar from "./components/loginbar/loginbar.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Loginbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
