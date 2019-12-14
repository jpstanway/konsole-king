import styled from "styled-components";

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
  transition: all 0.5s;
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

export const SlideOne = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-secondary);
  position: absolute;
  top: 0;
  transition: all 0.3s ease-in;
`;

export const SlideTwo = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-tertiary);
  position: absolute;
  top: 0;
  transition: all 0.3s ease-in;
`;
