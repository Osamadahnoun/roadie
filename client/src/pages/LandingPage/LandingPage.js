import React from "react";
import "../LandingPage/LandingPage.css";
import video from "../LandingPage/video/sunrise_over_the_winter_mountainA.mp4";

const LandingPage = () => {
  return (
    <div className="video-container">
      <div className="color-overlay"></div>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <h1 className="video-content">
        <h1 className="welcome">Welcome To Roadie</h1>
        <button className="actionBtn">
          <span>Find your next trip!</span>
        </button>
      </h1>
    </div>
  );
};

export default LandingPage;
