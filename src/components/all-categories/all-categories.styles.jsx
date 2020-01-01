import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllCategoriesContainer = styled.div`
  width: 100%;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

export const CategoryPreviewTitle = styled.h3`
  color: var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  flex-basis: 100%;
`;

export const CategoryPreviewLink = styled(Link)`
  color: var(--color-grey);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 0;
  transition: all 0.5s;

  &:hover {
    color: var(--color-grey-dark);
  }
`;
