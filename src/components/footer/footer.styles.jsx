import styled from "styled-components";
import { device, size } from "../../scripts/media";

export const FooterContainer = styled.footer`
  background-color: var(--color-grey-light);
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.3);
`;

export const FooterInnerContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 50rem) 1fr;
  height: 100%;
  margin: auto;
  padding: 5rem;
  max-width: ${size.laptopL};
  position: relative;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 30rem min-content;
    grid-gap: 2rem;
  }

  @media ${device.mobileL} {
    padding: 5rem 1rem;
  }
`;

export const FooterInputContainer = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr 12rem;
  height: 5rem;
  width: 90%;
  max-width: 60rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FooterInput = styled.input`
  padding-left: 1rem;
  border: 0;
`;

export const FooterBtn = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 0;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialMenu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  margin-right: 1rem;
  color: var(--color-grey-dark);

  &:hover {
    color: var(--color-grey);
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterMenu = styled.table`
  margin: auto;
  text-align: left;
  width: 80%;

  th {
    color: var(--color-grey-dark);
  }

  td a {
    color: var(--color-grey);

    &:hover {
      color: var(--color-grey-dark);
    }
  }

  th,
  td {
    width: 33.333%;
    padding: 5px;
  }
`;
