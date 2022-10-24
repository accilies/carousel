import React from "react";
import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";

import "./../styles.scss";

export default function Slide({ url }) {
  return (
    <div className="slide">
      <SlideImage src={url} />
      <SlideTitle title="TBD" />
    </div>
  );
}
