import React, { useContext } from "react";
import Slide from "./slide";
import SlideImage from "./slideImage";
import { SliderContext } from "../slider";

import "./../styles.scss";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div className="slide-list">
      {items.map((slide, index) => (
        <Slide key={index} url={slide} />
      ))}
    </div>
  );
}
