import React from "react";
import { connect } from "react-redux";

import {
  AccountLinksContainer,
  AccountLinksLink
} from "./account-links.styles";

const AccountLinks = ({ currentUser }) => (
  <AccountLinksContainer>
    <li>
      <AccountLinksLink to="/user/wishlist">
        <i className="fas fa-heart"></i> Wishlist(
        {currentUser && currentUser.wishlist
          ? currentUser.wishlist.length
          : "0"}
        )
      </AccountLinksLink>
    </li>
    <li>
      <AccountLinksLink to="/user/orders">
        <i className="fas fa-history"></i> Your Orders
      </AccountLinksLink>
    </li>
  </AccountLinksContainer>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AccountLinks);
