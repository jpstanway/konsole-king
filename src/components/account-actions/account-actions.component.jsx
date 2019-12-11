import React from "react";

import {
  AccountActionsContainer,
  AccountActionsLink
} from "./account-actions.styles";

const AccountActions = () => (
  <AccountActionsContainer>
    <li>
      <AccountActionsLink to="/">
        <i className="fas fa-heart"></i> Wishlist(0)
      </AccountActionsLink>
    </li>
    <li>
      <AccountActionsLink to="/">
        <i className="fas fa-equals"></i> Compare(0)
      </AccountActionsLink>
    </li>
  </AccountActionsContainer>
);

export default AccountActions;
