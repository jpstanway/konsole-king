import React from "react";
import { connect } from "react-redux";

// import "../../scripts/mobile-menu";

import { auth } from "../../firebase/firebase.utils";

import {
  LoginbarContainer,
  LoginMenu,
  LoginItems,
  LoginItem,
  LoginItemLink
} from "./loginbar.styles";

const Loginbar = props => (
  <LoginbarContainer>
    <LoginMenu>
      {props.currentUser ? (
        <LoginItems id="mobile-menu">
          <LoginItem>
            <LoginItemLink to="/register-login" onClick={() => auth.signOut()}>
              Logout
            </LoginItemLink>
          </LoginItem>
        </LoginItems>
      ) : (
        <LoginItems id="mobile-menu">
          <LoginItem>
            <LoginItemLink to="/register-login">Register</LoginItemLink>
          </LoginItem>
          <LoginItem>
            <LoginItemLink to="/register-login">Login</LoginItemLink>
          </LoginItem>
        </LoginItems>
      )}
      {/* <MobileLoginMenu id="mobile-btn">
        <MobileLoginButton />
      </MobileLoginMenu> */}
    </LoginMenu>
  </LoginbarContainer>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Loginbar);
