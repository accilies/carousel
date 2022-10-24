import React from "react";
import Slide from "./slide";
import SlideImage from "./slideImage";

import "./styles.scss";

export default function SlidesList() {
  return (
    <div className="slide-list">
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
    </div>
  );
}
