import React, { useState } from "react";

import { OptionsContainer, OptionButton } from "./account-options.styles";

const AccountOptions = () => {
  const [active, setActive] = useState("");

  const handleToggle = e => {
    setActive(e.target.id);
  };

  return (
    <OptionsContainer>
      <OptionButton
        to="/user/wishlist"
        id="wishlist"
        onClick={handleToggle}
        className={active === "wishlist" ? "account-option-active" : ""}
      >
        <i className="fas fa-heart fa-2x"></i> Wishlist
      </OptionButton>
      <OptionButton
        to="/user/orders"
        id="orders"
        onClick={handleToggle}
        className={active === "orders" ? "account-option-active" : ""}
      >
        <i className="fas fa-history fa-2x"></i> Order History
      </OptionButton>
    </OptionsContainer>
  );
};

export default AccountOptions;
