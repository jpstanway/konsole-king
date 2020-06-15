import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../scripts/media";

export const CategoryImg = styled.img`
  width: 100%;
  transition: all 0.5s;

  @media ${device.mobileL} {
    visibility: hidden;
  }
`;

export const CategoryOverlay = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  position: absolute;
  top: 0;
  left: 0;
`;

export const CategoryContainer = styled(Link)`
  background: url(${(props) => props.mobilebanner});
  width: 100%;
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

  @media ${device.mobileL} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
