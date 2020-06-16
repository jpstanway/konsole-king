import styled from "styled-components";
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
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  width: 100%;

  &:hover ${SliderControl} {
    top: 90%;
  }
`;

export const SliderOverlay = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1)
  );
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  height: 100%;
  width: 50%;

  @media ${device.laptop} {
    justify-content: space-between;
    padding-bottom: 10rem;
    width: 100%;
  }
`;

export const SlideText = styled.div`
  color: var(--color-grey-dark);
  text-align: center;

  h2 {
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  p {
    color: var(--color-grey);
  }
`;
