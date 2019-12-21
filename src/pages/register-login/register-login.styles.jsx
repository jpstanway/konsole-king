import styled from "styled-components";
import { device, size } from "../../scripts/media";

export const RegisterLoginPage = styled.div`
  display: grid;
  grid-gap: 8rem;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  max-width: ${size.laptopM};
  padding: 5rem 5rem 7rem 5rem;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const AuthFormList = styled.div`
  h2 {
    border: 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li:not(:last-child) {
    margin-bottom: 2rem;
  }

  i {
    color: var(--color-primary);
  }
`;
