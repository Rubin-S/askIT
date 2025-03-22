import React from "react";
import "./styles/HomeFeaturesSection.css";
import cardImage from "../../assets/images/feature1.png";
import cardImagee from "../../assets/images/video1.png";

const FeaturesSection = () => {
  return (
    <div className="home-features-section">
      <h2>We're BIG on what matters to you</h2>
      <p>
        Find your trustable connection effortlessly, without the hassle. Get the
        job done quickly, and with confidence.
      </p>

      <div className="home-features">
        <div className="home-feature">
          <h3>Search</h3>
          <p>Search for what you need with ease and precision.</p>
          <img src={cardImage} alt="Search" />
        </div>
        <div className="home-feature">
          <h3>Shortlist</h3>
          <p>Save and organize your top picks effortlessly.</p>
          <img src={cardImage} alt="Shortlist" />
        </div>
        <div className="home-feature">
          <h3>Select</h3>
          <p>Choose confidently and connect directly with the best options.</p>
          <img src={cardImage} alt="Select" />
        </div>
      </div>

      <div className="home-quick-video-section">
        <div className="home-video-thumbnail">
          <img src={cardImagee} alt="Quick Video" />
        </div>
        <div className="home-video-content">
          <h3>Quick how-to videos</h3>
          <p>Watch our simple guides to make the most of ASKIT</p>
          <p className="home-video-title">How to Search for Services</p>
          <button className="home-view-more-btn">View More ↗</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
