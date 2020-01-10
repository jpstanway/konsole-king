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
        All consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Home consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Handheld consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Cloud consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        Legacy consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/">
        VR headsets
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
        Used
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
  </MainMenuContainer>
);

export default MainMenu;
