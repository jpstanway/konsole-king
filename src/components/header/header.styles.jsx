import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 10rem;
  width: 100%;
  border-bottom: 1px solid var(--color-black);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LogoContainer = styled.div`
  height: 100%;
  padding: 2.5rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: var(--color-black);
  text-transform: uppercase;
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
`;

export const AccountActions = styled.ul`
  list-style: none;
  padding: 0;
`;
