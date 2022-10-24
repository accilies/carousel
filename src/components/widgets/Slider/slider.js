import React from "react";

const Slider = () => {
  const width = 100;
  const height = 100;

  return (
    <div style={{ width, height }} className="slider">
      <div className="slide-list">
        <div className="slide">
          <img
            src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg"
            alt="Alt Text"
            className="slide-image"
          />
          <div className="slide-title">Title</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
