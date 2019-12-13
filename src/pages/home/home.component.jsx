import React from "react";

import { HomePage, Main, Categories } from "./home.styles";
import MainMenu from "../../components/main-menu/main-menu.component";
import Category from "../../components/category-overview/category-overview.component";

import categories from "../../scripts/categories";

const Home = () => (
  <HomePage>
    <Main>
      <MainMenu />
      <div style={{ backgroundColor: "yellow" }}>img slider</div>
    </Main>
    <Categories>
      {categories.map(category => (
        <Category key={category.platform} category={category} />
      ))}
    </Categories>
  </HomePage>
);

export default Home;
