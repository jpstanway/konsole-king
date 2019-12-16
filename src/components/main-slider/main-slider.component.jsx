import React from "react";
import "../../scripts/slider";

import slideOne from "../../assets/slide_one.png";
import slideTwo from "../../assets/slide_two.png";

import {
  SliderContainer,
  Slide,
  SlideLink,
  SliderControl,
  SliderBtn
} from "./main-slider.styles";

import CustomButton from "../custom-button/custom-button.component";

const MainSlider = () => (
  <SliderContainer>
    <Slide id="slide-one" slide={slideOne}>
      <SlideLink to="/">
        <CustomButton>Shop Now</CustomButton>
      </SlideLink>
    </Slide>
    <Slide id="slide-two" slide={slideTwo}>
      <SlideLink to="/">
        <CustomButton>Shop Now</CustomButton>
      </SlideLink>
    </Slide>
    <SliderControl>
      <SliderBtn id="slider-btn-left" />
      <SliderBtn id="slider-btn-right" />
    </SliderControl>
  </SliderContainer>
);

export default MainSlider;
