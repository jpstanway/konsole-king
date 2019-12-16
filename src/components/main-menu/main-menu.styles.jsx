import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../scripts/media";

export const MainMenuContainer = styled.ul`
  list-style-type: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 25rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const MainMenuHeader = styled.li`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  padding: 2rem;
`;

export const MainMenuHeaderIcon = styled.i`
  color: var(--color-white);
  margin-right: 5px;
`;

export const MainMenuItem = styled.li`
  padding: 1.5rem;
  color: var(--color-grey-dark);
  cursor: pointer;

  &:nth-child(2n) {
    background-color: var(--color-grey-light);
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  &:hover i {
    visibility: visible;
  }
`;

export const MainMenuItemIcon = styled.i`
  color: var(--color-white);
  visibility: hidden;
`;

export const MainMenuLink = styled(Link)`
  color: inherit;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: inherit;
  }
`;
