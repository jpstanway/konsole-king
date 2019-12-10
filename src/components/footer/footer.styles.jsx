import styled from "styled-components";
import { device, size } from "../../scripts/media";

export const FooterContainer = styled.footer`
  background-color: var(--color-grey-light);
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.3);
`;

export const FooterInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
  height: 100%;
  max-width: ${size.laptopL};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const SocialMenu = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const SocialIcon = styled.a`
  margin-right: 1rem;
  color: var(--color-grey-dark);

  &:hover {
    color: var(--color-grey);
  }
`;

export const FooterMenu = styled.div`
  color: var(--color-grey);
  display: flex;
  align-items: center;

  table {
    margin: auto;
    text-align: left;
    width: 80%;
  }

  th,
  td {
    width: 33.333%;
  }
`;
