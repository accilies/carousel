import React, { useEffect, useState, createContext } from "react";
import Arrows from "./components/controls/arrow";
import SlidesList from "./components/slideList";
import { getImages } from "../../../imagesApi";

import "./styles.scss";

export const SliderContext = createContext();

const Slider = function ({ width, height }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const images = await getImages();
      setItems(images);
    };
    loadData();
  }, []);

  return (
    <div style={{ width, height }} className="slider">
      <SliderContext.Provider
        value={{
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows></Arrows>
        <SlidesList></SlidesList>
      </SliderContext.Provider>
    </div>
  );
};

export default Slider;
