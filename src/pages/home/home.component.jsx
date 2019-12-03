import React from "react";

import { HomePage } from "./home.styles";

const Home = () => (
  <HomePage>
    <div>
      <div style={{ backgroundColor: "red" }}>menu</div>
      <div style={{ backgroundColor: "yellow" }}>img slider</div>
    </div>
    <div style={{ backgroundColor: "orangered" }}>categories</div>
    <div style={{ backgroundColor: "purple" }}>footer</div>
  </HomePage>
);

export default Home;
