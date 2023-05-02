import React, { useState } from "react";
import "./Slider.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentImageIndex]?.url}
        alt={`Image ${currentImageIndex + 1}`}
        className="slider__image"
      />
      <button
        onClick={prevImage}
        className="slider__button slider__button--prev"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={nextImage}
        className="slider__button slider__button--next"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Slider;
