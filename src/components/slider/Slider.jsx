import React, { useState } from "react";
import "./slider.css";

export default function Slider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="banner-container">
      <img src="house2.jpg" alt="Left" className="image full-width" />
      <div
        className="slider-container"
        style={{ "--slider-position": `${sliderPosition}%` }}
      >
        <img src="house1.jpg" alt="Right" className="image half-width" />
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          className="slider"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}
