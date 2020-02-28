import React from "react";

import { LogoContainer, LogoImg } from "./logo.styles";
import logo from "../../assets/kk-logo.png";
import footerLogo from "../../assets/kk-logo-f.png";

const Logo = ({ footer }) => (
  <LogoContainer>
    <LogoImg to="/">
      <img src={footer ? footerLogo : logo} alt="konsole king logo" />
    </LogoImg>
  </LogoContainer>
);

export default Logo;
