import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { UserPage } from "./user.styles";

import AccountOptions from "../../components/account-options/account-options.component";
import Wishlist from "../wishlist/wishlist.component";
import OrderHistory from "../order-history/order-history.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const User = ({ currentUser }) => (
  <UserPage>
    <AccountOptions />
    <Route
      path="/user/wishlist"
      render={() => <Wishlist currentUser={currentUser} />}
    />
    <Route
      path="/user/orders"
      render={() => <OrderHistory currentUser={currentUser} />}
    />
  </UserPage>
);

User.propTypes = {
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(User);
