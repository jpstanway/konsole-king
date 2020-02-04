import React from "react";

import {
  HeaderContainer,
  Navbar,
  ContactAndSearchContainer,
  ContactList,
  ContactItem,
  PurchaseContainer
} from "./header.styles";

import Logo from "../logo/logo.component";
import SearchBar from "../search-bar/search-bar.component";
import AccountLinks from "../account-links/account-links.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => (
  <HeaderContainer>
    <Navbar>
      <Logo />
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
        <AccountLinks />
        <CartDropdown />
      </PurchaseContainer>
    </Navbar>
  </HeaderContainer>
);

export default Header;
