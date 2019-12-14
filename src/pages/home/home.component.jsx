import React from "react";

import { HomePage, Main, Categories } from "./home.styles";
import MainMenu from "../../components/main-menu/main-menu.component";
import MainSlider from "../../components/main-slider/main-slider.component";
import Category from "../../components/category-overview/category-overview.component";

import categories from "../../scripts/categories";

const Home = () => (
  <HomePage>
    <Main>
      <MainMenu />
      <MainSlider />
    </Main>
    <Categories>
      {categories.map(category => (
        <Category key={category.platform} category={category} />
      ))}
    </Categories>
  </HomePage>
);

export default Home;
