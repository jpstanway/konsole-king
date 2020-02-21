import styled from "styled-components";
import { device, size } from "../../scripts/media";

export const HomePage = styled.div`
  display: grid;
  grid-template-rows: 50rem 1fr;
  padding: 2rem 5rem 10rem 5rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;

  @media ${device.tablet} {
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Brands = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, min-content);
  }
`;
