import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../scripts/media";

export const SliderControl = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s;
`;

export const SliderBtn = styled.span`
  width: 4rem;
  height: 5px;
  background-color: var(--color-grey);
  opacity: 0.8;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  &:hover ${SliderControl} {
    top: 90%;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.slide});
  opacity: 0%;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in;

  @media ${device.laptop} {
    background: url(${(props) => props.mobileSlide});
    background-position: center;
    background-repeat: no-repeat;
    background-color: #d9d9d9;
  }
`;

export const SlideLink = styled(Link)`
  position: absolute;
  bottom: 145px;
  left: 100px;

  @media ${device.laptop} {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
