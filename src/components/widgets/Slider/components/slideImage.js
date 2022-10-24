import React from "react";

import "./../styles.scss";

export default function SlideImage({ src, alt }) {
  return (
    <>
      <div className="slide">
        <img
          src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg"
          alt="Alt Text"
          className="slide-image"
        />
      </div>
    </>
  );
}
