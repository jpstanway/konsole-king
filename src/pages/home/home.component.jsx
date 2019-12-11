import React from "react";

import { HomePage, Main, Categories } from "./home.styles";
import MainMenu from "../../components/main-menu/main-menu.component";
import Category from "../../components/category-overview/category-overview.component";

const categories = [
  "Nintendo",
  "PlayStation",
  "Xbox",
  "Google",
  "Sega",
  "Atari"
];

const Home = () => (
  <HomePage>
    <Main>
      <MainMenu />
      <div style={{ backgroundColor: "yellow" }}>img slider</div>
    </Main>
    <Categories>
      {categories.map(category => (
        <Category key={category} category={category} />
      ))}
    </Categories>
  </HomePage>
);

export default Home;
