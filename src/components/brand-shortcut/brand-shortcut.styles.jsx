import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryImg = styled.img`
  width: 100%;
  margin: auto;
  max-width: 20rem;
  transition: all 0.5s;
`;

export const CategoryLogo = styled.img`
  width: 100%;
  margin: auto;
  max-width: 20rem;
`;

export const CategoryOverlay = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  position: absolute;
  top: 0;
  left: 0;
`;

export const CategoryContainer = styled(Link)`
  background: linear-gradient(
    to right,
    rgba(${(props) => props.color}, 0.3),
    rgba(${(props) => props.color}, 0.1)
  );
  border-radius: 2px;
  height: 144px;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 50% 50%;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;

  &:hover ${CategoryImg} {
    transform: scale(1.1);
    filter: brightness(120%);
  }
`;
