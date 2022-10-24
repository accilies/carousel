import React from "react";

import "./../styles.scss";

export default function SlideImage({ src }) {
  return (
    <>
      <div className="slide">
        <img src={src} alt="" className="slide-image" />
      </div>
    </>
  );
}
