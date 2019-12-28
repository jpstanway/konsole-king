import styled from "styled-components";
import { size } from "../../scripts/media";

export const SpinnerContainer = styled.div`
  padding: 2rem 5rem 10rem 5rem;
  width: 100%;
  max-width: ${size.laptopM};
  margin: auto;
`;

export const SpinnerImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
