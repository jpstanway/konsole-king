import React from "react";

import { AccountActionsContainer } from "./account-actions.styles";

const AccountActions = () => (
  <AccountActionsContainer>
    <li>
      <a href="#">
        <i class="fas fa-heart"></i> Wishlist(0)
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-equals"></i> Compare(0)
      </a>
    </li>
  </AccountActionsContainer>
);

export default AccountActions;
