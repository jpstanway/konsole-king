import React from "react";

import {
  AccountLinksContainer,
  AccountLinksLink
} from "./account-links.styles";

const AccountLinks = () => (
  <AccountLinksContainer>
    <li>
      <AccountLinksLink to="/user/wishlist">
        <i className="fas fa-heart"></i> Wishlist(0)
      </AccountLinksLink>
    </li>
    <li>
      <AccountLinksLink to="/user/orders">
        <i className="fas fa-history"></i> Your Orders
      </AccountLinksLink>
    </li>
  </AccountLinksContainer>
);

export default AccountLinks;
