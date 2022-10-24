import React from "react";
import Arrows from "./components/controls/arrow";
import SlidesList from "./components/slideList";

import "./styles.scss";

const Slider = () => {
  const width = 500;
  const height = 500;

  return (
    <div style={{ width, height }} className="slider">
      <Arrows></Arrows>
      <SlidesList></SlidesList>
    </div>
  );
};

export default Slider;
