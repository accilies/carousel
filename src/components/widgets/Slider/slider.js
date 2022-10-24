import React, { useEffect, useState } from "react";
import Arrows from "./components/controls/arrow";
import SlidesList from "./components/slideList";
import { getImages } from "../../../imagesApi";

import "./styles.scss";

const Slider = () => {
  const width = 500;
  const height = 500;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const images = await getImages();
      setItems(images);
    };
    loadData();
  }, []);

  return (
    <div style={{ width, height }} className="slider">
      <Arrows></Arrows>
      <SlidesList></SlidesList>
    </div>
  );
};

export default Slider;
