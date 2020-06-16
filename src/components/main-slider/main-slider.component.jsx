import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  SliderContainer,
  SliderOverlay,
  Slide,
  SlideContent,
  SlideText,
  SliderControl,
  SliderBtn,
} from "./main-slider.styles";

import CustomButton from "../custom-button/custom-button.component";
import slides from "../../scripts/slides";

const MainSlider = () => {
  const [active, setActive] = useState(true);

  return (
    <SliderContainer>
      <Slide
        id={slides[0].id}
        slide={slides[0].img}
        mobileSlide={slides[0].mobileImg}
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
          <Link to="/browse/consoles" style={{ left: "10px" }}>
            <CustomButton>Shop Now</CustomButton>
          </Link>
        </SlideContent>
      </Slide>
      <Slide
        id={slides[1].id}
        slide={slides[1].img}
        mobileSlide={slides[1].mobileImg}
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
          <Link to="/browse/vr">
            <CustomButton>Shop Now</CustomButton>
          </Link>
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
      <SliderOverlay />
    </SliderContainer>
  );
};

export default MainSlider;
