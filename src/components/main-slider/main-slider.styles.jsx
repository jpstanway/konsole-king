import styled from "styled-components";
import { Link } from "react-router-dom";

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
  opacity: 80%;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    opacity: 100%;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${SliderControl} {
    top: 90%;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.slide});
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in;
`;

export const SlideLink = styled(Link)`
  position: absolute;
  bottom: 145px;
  left: 78px;
`;
