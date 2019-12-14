import React from "react";
import "../../scripts/slider";

import {
  SliderContainer,
  SlideOne,
  SlideTwo,
  SliderControl,
  SliderBtn
} from "./main-slider.styles";

const MainSlider = () => (
  <SliderContainer>
    <SlideOne id="slide-one" />
    <SlideTwo id="slide-two" />
    <SliderControl>
      <SliderBtn id="slider-btn-left" />
      <SliderBtn id="slider-btn-right" />
    </SliderControl>
  </SliderContainer>
);

export default MainSlider;
