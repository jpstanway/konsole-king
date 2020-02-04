import React, { useState } from "react";

import { OptionsContainer, OptionButton } from "./account-options.styles";

const AccountOptions = () => {
  const [active, setActive] = useState("");

  const activeStyle = {
    border: "2px solid var(--color-tertiary)"
  };

  const handleToggle = e => {
    setActive(e.target.id);
  };

  return (
    <OptionsContainer>
      <OptionButton
        to="/user/wishlist"
        id="wishlist"
        onClick={handleToggle}
        style={active === "wishlist" ? activeStyle : null}
      >
        <i className="fas fa-heart fa-2x"></i> Wishlist
      </OptionButton>
      <OptionButton
        to="/user/orders"
        id="orders"
        onClick={handleToggle}
        style={active === "orders" ? activeStyle : null}
      >
        <i className="fas fa-history fa-2x"></i> Order History
      </OptionButton>
    </OptionsContainer>
  );
};

export default AccountOptions;
