import styled from "styled-components";
import { size } from "../../scripts/media";

export const BrowsePage = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
`;

export const BrowsePageTitle = styled.h2`
  color: var(--color-grey-dark);
  padding-bottom: 1rem;
  margin-bottom: 5rem;
`;
