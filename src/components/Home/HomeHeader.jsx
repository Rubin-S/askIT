import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/HomeHeader.css';
function Header() {
  const navigate = useNavigate();
  return (
    <div className="home-hero">
      <div className="home-hero-overlay"></div>
      <div className="home-learn-about">Learn about Ask IT</div>
      <h1>Over a million skilled professionals at your fingertips</h1>
      <p>Your go-to destination for finding trusted experts.</p>
      <div className="home-search-bar">
        <div className="home-location">
            <div className="home-location-icon"></div>
            <div className="home-location-text">
            <label for="Location">Location</label>
            <select name="Place" id="place">
                <option value="default">Default</option>
                <option value="Puducherry">Puducherry</option>
            </select>
            </div>
        </div>
        <input className="home-search-space" type="text" placeholder="Search" />
        <button className="home-search-button" onClick={() => navigate("/Search")}> </button>
      </div>
    </div>
  );
}

export default Header;
