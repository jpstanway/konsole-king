import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccountActionsContainer = styled.ul`
  list-style: none;
  padding: 0;
  min-width: 10rem;

  li i {
    color: var(--color-primary);
  }
`;

export const AccountActionsLink = styled(Link)`
  display: flex;
  justify-content: space-around;
`;
