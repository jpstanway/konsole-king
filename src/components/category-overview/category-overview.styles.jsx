import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryImg = styled.img`
  width: 100%;
  max-width: 60rem;
  transition: all 0.5s;
`;

export const CategoryOverlay = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  position: absolute;
  top: 0;
  left: 0;
`;

export const CategoryContainer = styled(Link)`
  width: 100%;
  height: 100%;
  background-color: var(--color-grey);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover ${CategoryImg} {
    transform: scale(1.1);
    filter: brightness(120%);
  }
`;

export const CategoryLogo = styled.img`
  width: 100%;
  max-width: 20rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;
