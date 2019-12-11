import React from "react";

import {
  MainMenuContainer,
  MainMenuHeader,
  MainMenuHeaderIcon,
  MainMenuItem,
  MainMenuItemIcon,
  MainMenuLink
} from "./main-menu.styles";

const MainMenu = () => (
  <MainMenuContainer>
    <MainMenuHeader>
      <MainMenuHeaderIcon className="fas fa-list"></MainMenuHeaderIcon> All
      Categories
    </MainMenuHeader>
    <MainMenuItem>
      <MainMenuLink to="/">
        Consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Games
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Laptops
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Accessories
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Audio
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        TVs & Monitors
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Collectibles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Controllers
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Used
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
  </MainMenuContainer>
);

export default MainMenu;
