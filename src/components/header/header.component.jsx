import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  ContactList,
  ContactItem,
  PurchaseContainer,
  AccountActions
} from "./header.styles";

import SearchBar from "../search-bar/search-bar.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo to="/">Konsole King</Logo>
    </LogoContainer>
    <div>
      <ContactList>
        <ContactItem>
          <i className="fas fa-phone-square-alt fa-2x"></i> 1-800-123-4567
        </ContactItem>
        <ContactItem>
          <i className="fas fa-envelope-square fa-2x"></i>{" "}
          contact@konsoleking.com
        </ContactItem>
      </ContactList>
      <SearchBar />
    </div>
    <PurchaseContainer>
      <AccountActions>
        <li>Wishlist(0)</li>
        <li>Compare(0)</li>
      </AccountActions>
      <CartDropdown />
    </PurchaseContainer>
  </HeaderContainer>
);

export default Header;
