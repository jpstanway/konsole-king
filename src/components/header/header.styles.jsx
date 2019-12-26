import styled from "styled-components";
import { device, size } from "../../scripts/media";

export const HeaderContainer = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
`;

export const Navbar = styled.div`
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 5rem;
  width: 100%;
  margin: auto;
  max-width: ${size.laptopM};

  @media ${device.laptop} {
    height: auto;
    flex-direction: column;
    padding: 4rem 5rem;
  }

  @media ${device.mobileL} {
    padding: 4rem 0;
  }
`;

export const ContactAndSearchContainer = styled.div`
  flex: 1 0;
  padding: 2rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--color-grey-dark);

  &:not(:first-child) {
    margin-left: 1rem;
  }

  i {
    color: var(--color-primary);
    margin-right: 5px;
  }
`;

export const PurchaseContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 8.5rem;

  @media ${device.laptop} {
    height: auto;
  }
`;
