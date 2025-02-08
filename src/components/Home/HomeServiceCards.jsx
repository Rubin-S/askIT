import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./styles/HomeServiceCards.css";

const ServiceCards = () => {
  const navigate = useNavigate();
  return (
    <div className="home-service-cards">
      <div className="home-card">
        <div className="home-card-content">
          <h2>Post your service</h2>
          <p>Have a service to offer? List it here to reach more people.</p>
        </div>
        <div className="home-card-bottom">
            <button className="home-btn" onClick={() => navigate("/Provider-Signup")}>Get Started ↗</button>
            <div className="home-card-image">
            </div>
        </div>
      </div>
      <div className="home-card">
        <div className="home-card-content">
          <h2>Find Services</h2>
          <p>Need a reliable service? Find trusted professionals here.</p>
        </div>
        <div className="home-card-bottom">
            <button className="home-btn" onClick={() => navigate("/Consumer-Signup")}>Get Started ↗</button>
            <div className="home-card-image">
                <img src="home-find-service-image.png" alt="Find Service" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
