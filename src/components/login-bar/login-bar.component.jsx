import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../scripts/dropdown";

import { auth } from "../../firebase/firebase.utils";
import { showNotification } from "../../redux/notification/notification.actions";

import {
  LoginbarContainer,
  LoginMenu,
  LoginItems,
  LoginItem,
  LoginItemLink,
  MobileLoginMenu,
  MobileLoginButton
} from "./login-bar.styles";

import Notification from "../notification/notification.component";

const LoginBar = ({ currentUser, showNotification }) => {
  const handleLogout = () => {
    auth.signOut();
    showNotification("Successfully logged out");
  };

  return (
    <LoginbarContainer>
      <LoginMenu>
        <LoginItems id="mobile-menu">
          <LoginItem>
            <LoginItemLink to="/">Home</LoginItemLink>
          </LoginItem>
          <LoginItem>
            <LoginItemLink to="/browse">Browse</LoginItemLink>
          </LoginItem>
          {currentUser ? (
            <>
              <LoginItem>
                <LoginItemLink to="/user">My Account</LoginItemLink>
              </LoginItem>
              <LoginItem>
                <LoginItemLink to="/register-login" onClick={handleLogout}>
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
      <Notification />
    </LoginbarContainer>
  );
};

LoginBar.propTypes = {
  currentUser: PropTypes.object,
  showNotification: PropTypes.func
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { showNotification })(LoginBar);
