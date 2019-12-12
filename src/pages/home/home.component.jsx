import React from "react";

import { HomePage, Main, Categories } from "./home.styles";
import MainMenu from "../../components/main-menu/main-menu.component";
import Category from "../../components/category-overview/category-overview.component";

import nintendoBanner from "../../assets/nintendo_banner.png";
import segaBanner from "../../assets/stadia_banner.png";
import stadiaBanner from "../../assets/stadia_banner.png";
import xboxBanner from "../../assets/xbox_banner.png";
import playStationBanner from "../../assets/playstation_banner.png";
import atariBanner from "../../assets/atari_banner.png";

const categories = [
  playStationBanner,
  xboxBanner,
  nintendoBanner,
  stadiaBanner,
  segaBanner,
  atariBanner
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
