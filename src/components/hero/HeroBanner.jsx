import React from "react";
import "./HeroBanner.css"; // Import the CSS file
import Slider from "../slider/Slider";

import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Transform your home with the click of a button.</h1>
        <p>
          Use our artificial intelligence platform to virtuallly stage and
          refine your real estate photos. Automatically generate descriptions
          from the style you choose.
        </p>

        <Link to={"/app"}>
          <button>Try it now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
