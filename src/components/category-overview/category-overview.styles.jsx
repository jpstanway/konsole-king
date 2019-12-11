import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled(Link)`
  width: 100%;
  height: 16rem;
  background-color: var(--color-grey);
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;

export const CategoryTitle = styled.h1`
  color: var(--color-grey-dark);
  font-weight: 700;
`;
