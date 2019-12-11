import React from "react";
import "../../scripts/mobile-menu";

import {
  LoginbarContainer,
  LoginMenu,
  LoginItems,
  LoginItem,
  LoginItemLink,
  MobileLoginMenu,
  MobileLoginButton
} from "./loginbar.styles";

const Loginbar = () => (
  <LoginbarContainer>
    <LoginMenu>
      <LoginItems id="mobile-menu">
        <LoginItem>
          <LoginItemLink to="/">Register</LoginItemLink>
        </LoginItem>
        <LoginItem>
          <LoginItemLink to="/">Login</LoginItemLink>
        </LoginItem>
      </LoginItems>
      <MobileLoginMenu id="mobile-btn">
        <MobileLoginButton />
      </MobileLoginMenu>
    </LoginMenu>
  </LoginbarContainer>
);

export default Loginbar;
