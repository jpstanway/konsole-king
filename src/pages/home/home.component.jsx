import React from "react";

import { HomePage, Main, Brands } from "./home.styles";
import MainMenu from "../../components/main-menu/main-menu.component";
import MainSlider from "../../components/main-slider/main-slider.component";
import BrandShortcut from "../../components/brand-shortcut/brand-shortcut.component";

import categories from "../../scripts/categories";

const Home = () => (
  <HomePage>
    <Main>
      <MainMenu />
      <MainSlider />
    </Main>
    <Brands>
      {categories.map(category => (
        <BrandShortcut key={category.platform} category={category} />
      ))}
    </Brands>
  </HomePage>
);

export default Home;
