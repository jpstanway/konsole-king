import React, { useState } from "react";

import {
  SliderContainer,
  Slide,
  SlideLink,
  SliderControl,
  SliderBtn,
} from "./main-slider.styles";

import CustomButton from "../custom-button/custom-button.component";

const slideOne =
  "https://res.cloudinary.com/mtninja/image/upload/v1587932962/konsole-king/slide_one.png";
const slideTwo =
  "https://res.cloudinary.com/mtninja/image/upload/v1587932962/konsole-king/slide_two.png";
const slideOneMobile =
  "https://res.cloudinary.com/mtninja/image/upload/v1588003746/konsole-king/slide-one-mobile-1.png";
const slideTwoMobile =
  "https://res.cloudinary.com/mtninja/image/upload/v1588004664/konsole-king/slide-two-mobile-1.png";

const MainSlider = () => {
  const [active, setActive] = useState(true);

  return (
    <SliderContainer>
      <Slide
        id="slide-one"
        slide={slideOne}
        mobileSlide={slideOneMobile}
        className={active ? "slider-active show-slide-one" : "hide-slide-one"}
      >
        <SlideLink to="/browse/consoles">
          <CustomButton>Shop Now</CustomButton>
        </SlideLink>
      </Slide>
      <Slide
        id="slide-two"
        slide={slideTwo}
        mobileSlide={slideTwoMobile}
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
