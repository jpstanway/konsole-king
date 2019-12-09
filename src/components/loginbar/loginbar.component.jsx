import React from "react";
import "../../scripts/mobile-menu";

import {
  LoginbarContainer,
  LoginMenu,
  LoginItems,
  LoginItem,
  MobileLoginMenu,
  MobileLoginButton
} from "./loginbar.styles";

const Loginbar = () => (
  <LoginbarContainer>
    <LoginMenu>
      <LoginItems id="mobile-menu">
        <LoginItem>
          <a href="#">Register</a>
        </LoginItem>
        <LoginItem>
          <a href="#">Login</a>
        </LoginItem>
      </LoginItems>
      <MobileLoginMenu id="mobile-btn">
        <MobileLoginButton />
      </MobileLoginMenu>
    </LoginMenu>
  </LoginbarContainer>
);

export default Loginbar;
