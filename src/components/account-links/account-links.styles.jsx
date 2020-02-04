import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccountLinksContainer = styled.ul`
  list-style: none;
  padding: 0;
  min-width: 10rem;
  margin-bottom: 1rem;

  li i {
    color: var(--color-primary);
  }
`;

export const AccountLinksLink = styled(Link)`
  display: flex;
  justify-content: space-around;
`;
