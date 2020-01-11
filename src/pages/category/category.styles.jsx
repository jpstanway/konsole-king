import styled from "styled-components";
import { size, device } from "../../scripts/media";

export const CategoryContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
  margin-bottom: 5rem;
`;

export const CategoryTitle = styled.h2`
  color: var(--color-grey-dark);
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

export const CategoryItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    justify-content: center;
  }
`;
