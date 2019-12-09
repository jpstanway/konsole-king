import React from "react";

import {
  HeaderContainer,
  Navbar,
  LogoContainer,
  Logo,
  ContactAndSearchContainer,
  ContactList,
  ContactItem,
  PurchaseContainer
} from "./header.styles";

import SearchBar from "../search-bar/search-bar.component";
import AccountActions from "../account-actions/account-actions.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => (
  <HeaderContainer>
    <Navbar>
      <LogoContainer>
        <Logo to="/">Konsole King</Logo>
      </LogoContainer>
      <ContactAndSearchContainer>
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
      </ContactAndSearchContainer>
      <PurchaseContainer>
        <AccountActions />
        <CartDropdown />
      </PurchaseContainer>
    </Navbar>
  </HeaderContainer>
);

export default Header;
