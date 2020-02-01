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
      <MainMenuLink to="/browse/consoles?allConsoles=true">
        All consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/consoles?allConsoles=true&filter=home">
        Home consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/consoles?allConsoles=true&filter=handheld">
        Handheld consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/consoles?allConsoles=true&filter=cloud">
        Cloud consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/legacy">
        Legacy consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/vr">
        VR headsets
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/accessories">
        Accessories
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/audio">
        Audio
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to="/browse/used">
        Used
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
  </MainMenuContainer>
);

export default MainMenu;
