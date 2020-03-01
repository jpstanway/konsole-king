import React, { useState } from "react";

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

const MainSlider = () => {
  const [active, setActive] = useState(true);

  return (
    <SliderContainer>
      <Slide
        id="slide-one"
        slide={slideOne}
        className={active ? "slider-active show-slide-one" : "hide-slide-one"}
      >
        <SlideLink to="/browse/consoles">
          <CustomButton>Shop Now</CustomButton>
        </SlideLink>
      </Slide>
      <Slide
        id="slide-two"
        slide={slideTwo}
        className={active ? "hide-slide-two" : "slider-active show-slide-two"}
      >
        <SlideLink to="/browse/vr">
          <CustomButton>Shop Now</CustomButton>
        </SlideLink>
      </Slide>
      <SliderControl>
        <SliderBtn
          id="slide-one-btn"
          onClick={() => setActive(true)}
          className={active ? "slider-active" : ""}
        />
        <SliderBtn
          id="slide-two-btn"
          onClick={() => setActive(false)}
          className={active ? "" : "slider-active"}
        />
      </SliderControl>
    </SliderContainer>
  );
};

export default MainSlider;
