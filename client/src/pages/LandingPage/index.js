import React from "react";
import "../LandingPage/LandingPage.css";
import video from "../LandingPage/video/sunrise_over_the_winter_mountainA.mp4";

const LandingPage = () => {
  return (
    <div class="video-container">
      <div class="color-overlay"></div>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <h1 class="video-content">
        <h1>Welcome To Roadie</h1>
        <button>
          <span>Find your next trip!</span>
        </button>
      </h1>
    </div>
  );
};

export default LandingPage;
