import styled from "styled-components";
import { size } from "../../scripts/media";

export const HomePage = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 50rem);
  padding: 2rem 5rem;
  width: 100%;
  max-width: ${size.laptop};
  margin: auto;
`;
