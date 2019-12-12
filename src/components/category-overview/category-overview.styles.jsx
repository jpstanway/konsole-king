import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled(Link)`
  width: 100%;
  background-color: var(--color-grey);
  display: flex;
  align-items: center;
`;

export const CategoryImg = styled.img`
  width: 100%;
  max-width: 60rem;
`;
