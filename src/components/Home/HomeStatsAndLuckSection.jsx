import React from "react";
import './styles/HomeStatsAndLuckSection.css';
const StatsAndLuckSection = () => {
  return (
    <div className="home-stats-luck-section">
      {/* Header Section */}
      <h2>
        Explore thousands of trusted connections<br/> tailored to your everyday needs.
      </h2>

      {/* Stats Section */}
      <div className="home-stats">
        <div className="home-stat">
          <h3>200+</h3>
          <p>services Providers</p>
        </div>
        <div className="home-stat">
          <h3>200+</h3>
          <p>visitors</p>
        </div>
        <div className="home-stat">
          <h3>200+</h3>
          <p>connection made per sec</p>
        </div>
        <div className="home-stat">
          <h3>200+</h3>
          <p>verified users</p>
        </div>
      </div>

      {/* Luck Checker Section */}
      <div className="home-luck-checker">
        <div className="home-luck-placeholder">
          {/* Placeholder for additional content */}
        </div>
        <div className="home-luck-content">
            <div className="home-luck-text">
                <h3>Check your luck today</h3>
                <p>Today's Lucky Thought Just for You!</p>
          </div>
          <button className="home-check-now-btn">Check now</button>
        </div>
      </div>
    </div>
  );
};

export default StatsAndLuckSection;
