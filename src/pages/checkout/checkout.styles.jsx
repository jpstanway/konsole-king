import styled from "styled-components";
import { size } from "../../scripts/media";

export const CheckoutPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 25rem;
  grid-gap: 2rem;
  padding: 5rem 2rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
`;
