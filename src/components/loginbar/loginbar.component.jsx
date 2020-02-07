import React from "react";
import { connect } from "react-redux";

import "../../scripts/dropdown";

import { auth } from "../../firebase/firebase.utils";

import {
  LoginbarContainer,
  LoginMenu,
  LoginItems,
  LoginItem,
  LoginItemLink,
  MobileLoginMenu,
  MobileLoginButton
} from "./loginbar.styles";

const Loginbar = props => (
  <LoginbarContainer>
    <LoginMenu>
      <LoginItems id="mobile-menu">
        <LoginItem>
          <LoginItemLink to="/">Home</LoginItemLink>
        </LoginItem>
        <LoginItem>
          <LoginItemLink to="/browse">Browse</LoginItemLink>
        </LoginItem>
        {props.currentUser ? (
          <>
            <LoginItem>
              <LoginItemLink to="/user">My Account</LoginItemLink>
            </LoginItem>
            <LoginItem>
              <LoginItemLink
                to="/register-login"
                onClick={() => auth.signOut()}
              >
                Logout
              </LoginItemLink>
            </LoginItem>
          </>
        ) : (
          <>
            <LoginItem>
              <LoginItemLink to="/register-login">Register</LoginItemLink>
            </LoginItem>
            <LoginItem>
              <LoginItemLink to="/register-login">Login</LoginItemLink>
            </LoginItem>
          </>
        )}
      </LoginItems>
      <MobileLoginMenu id="mobile-btn">
        <MobileLoginButton />
      </MobileLoginMenu>
    </LoginMenu>
  </LoginbarContainer>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Loginbar);
