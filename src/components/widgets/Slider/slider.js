import React from "react";
import SlideImage from "./slideImage";
import SlidesList from "./slideList";
import SlideTitle from "./slideTitle";

import "./styles.scss";

const Slider = () => {
  const width = 500;
  const height = 500;

  return (
    <div style={{ width, height }} className="slider">
      <div className="arrows">
        <div className="arrow left" />
        <div className="arrow right" />
      </div>

      <div className="slide-list">
        <SlidesList></SlidesList>
      </div>
    </div>
  );
};

export default Slider;
