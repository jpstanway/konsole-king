import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../scripts/media";

export const AllCategoriesContainer = styled.div`
  width: 100%;
`;

export const AllCategoriesTitle = styled.h2`
  color: var(--color-grey-dark);
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  @media ${device.tablet} {
    justify-content: center;
  }
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
  transition: all 0.5s;
  flex: 1 0;

  &:hover {
    color: var(--color-grey-dark);
  }

  @media ${device.tablet} {
    flex-basis: 100%;
    justify-content: center;
    margin-top: 5rem;
  }
`;
