import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { UserPage } from "./user.styles";

import AccountOptions from "../../components/account-options/account-options.component";
import Wishlist from "../wishlist/wishlist.component";
import OrderHistory from "../order-history/order-history.component";

const User = () => (
  <UserPage>
    <AccountOptions />
    <Route path="/user/wishlist" component={Wishlist} />
    <Route path="/user/orders" component={OrderHistory} />
  </UserPage>
);

User.propTypes = {
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(User);
