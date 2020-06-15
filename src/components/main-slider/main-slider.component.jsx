import React, { useState } from "react";

import {
  SliderContainer,
  Slide,
  SlideContent,
  SlideText,
  SlideLink,
  SliderControl,
  SliderBtn,
} from "./main-slider.styles";

import CustomButton from "../custom-button/custom-button.component";

const slideOne =
  "https://res.cloudinary.com/mtninja/image/upload/v1592189463/konsole-king/slide_1.png";
const slideTwo =
  "https://res.cloudinary.com/mtninja/image/upload/v1592191160/konsole-king/slide_2.png";
const slideOneMobile =
  "https://res.cloudinary.com/mtninja/image/upload/v1592191945/konsole-king/slide_1_mobile.png";
const slideTwoMobile =
  "https://res.cloudinary.com/mtninja/image/upload/v1592192484/konsole-king/slide_2_mobile.png";

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
        <SlideContent>
          <SlideText>
            <h2>SAVE UP TO</h2>
            <h2>
              <strong>$200</strong>
            </h2>
            <p>On selected consoles &amp; gaming</p>
            <p>laptops</p>
          </SlideText>
          <SlideLink to="/browse/consoles" style={{ left: "10px" }}>
            <CustomButton>Shop Now</CustomButton>
          </SlideLink>
        </SlideContent>
      </Slide>
      <Slide
        id="slide-two"
        slide={slideTwo}
        mobileSlide={slideTwoMobile}
        className={active ? "hide-slide-two" : "slider-active show-slide-two"}
      >
        <SlideContent>
          <SlideText>
            <h2>
              <strong>VR SALE</strong>
            </h2>
            <h3>Unbeatable savings on all VR headsets</h3>
            <p>Sale ends December 27</p>
          </SlideText>
          <SlideLink to="/browse/vr">
            <CustomButton>Shop Now</CustomButton>
          </SlideLink>
        </SlideContent>
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
