import React from "react";

import {
  MainMenuContainer,
  MainMenuHeader,
  MainMenuHeaderIcon,
  MainMenuItem,
  MainMenuItemIcon,
  MainMenuLink
} from "./main-menu.styles";

import customLinks from "../../scripts/custom-links";

const MainMenu = () => (
  <MainMenuContainer>
    <MainMenuHeader>
      <MainMenuHeaderIcon className="fas fa-list"></MainMenuHeaderIcon> All
      Categories
    </MainMenuHeader>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["all-consoles"]}`}>
        All consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["home-consoles"]}`}>
        Home consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["handheld-consoles"]}`}>
        Handheld consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["cloud-consoles"]}`}>
        Cloud consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["legacy-consoles"]}`}>
        Legacy consoles
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["vr-headsets"]}`}>
        VR headsets
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["accessories"]}`}>
        Accessories
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["audio"]}`}>
        Audio
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
    <MainMenuItem>
      <MainMenuLink to={`/browse/${customLinks["used"]}`}>
        Used
        <MainMenuItemIcon className="fas fa-chevron-circle-right"></MainMenuItemIcon>
      </MainMenuLink>
    </MainMenuItem>
  </MainMenuContainer>
);

export default MainMenu;
