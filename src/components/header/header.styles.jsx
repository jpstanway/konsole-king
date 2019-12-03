import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid var(--color-black);
  font-size: 1.4rem;
  width: 100%;
`;

export const Loginbar = styled.div`
  background-color: var(--color-grey-light);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  ul {
    list-style-type: none;

    li {
      display: inline-block;

      &:not(:first-child) {
        border-left: 1px solid black;
        margin-left: 1rem;
        padding-left: 1rem;
      }
    }
  }
`;

export const Navbar = styled.div`
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10rem;
`;

export const Logo = styled(Link)`
  color: var(--color-black);
  text-transform: uppercase;
`;

export const ContactAndSearchContainer = styled.div`
  flex-grow: 1;
  padding: 2rem;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--color-grey-dark);

  &:not(:first-child) {
    margin-left: 1rem;
  }

  i {
    color: var(--color-primary);
    margin-right: 5px;
  }
`;

export const PurchaseContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 8.5rem;
`;
