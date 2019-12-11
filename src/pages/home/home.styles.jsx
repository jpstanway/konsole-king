import styled from "styled-components";
import { size } from "../../scripts/media";

export const HomePage = styled.div`
  display: grid;
  grid-template-rows: 50rem 1fr;
  padding: 2rem 5rem 5rem 5rem;
  width: 100%;
  max-width: ${size.laptopL};
  margin: auto;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-gap: 2rem;
`;

export const Categories = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
`;
