import React from "react";

import { LogoContainer, LogoImg } from "./logo.styles";

const logo =
  "https://res.cloudinary.com/mtninja/image/upload/v1587932963/konsole-king/kk-logo.png";
const footerLogo =
  "https://res.cloudinary.com/mtninja/image/upload/v1587932963/konsole-king/kk-logo-f.png";

const Logo = ({ footer }) => (
  <LogoContainer>
    <LogoImg to="/">
      <img src={footer ? footerLogo : logo} alt="konsole king logo" />
    </LogoImg>
  </LogoContainer>
);

export default Logo;
