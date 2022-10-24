import React from "react";
import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";

import "./../styles.scss";

export default function Slide() {
  return (
    <div className="slide">
      <SlideImage />
      <SlideTitle title="Title New" />
    </div>
  );
}
