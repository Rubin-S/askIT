import React from "react";
import "./styles/Card.css";

const Card = ({ details }) => {
  return (
    <div className="card">
      <div className="profile-card-header">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="menu">...</div>
      </div>


      <div className="profile-card-icon">
        <div className="profile-pic">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="avatar"
          />
        </div>
        <h2>
          {details.firstName || details.lastName
            ? `${details.firstName} ${details.lastName}`
            : "Your Name"}
        </h2>
        <h4>{details.professionName || "Profession"}</h4>
      </div>

      <div className="profile-links">
        
        <div className="profile-details">
          <p className="item1">Services: {details.servicesOffered}</p>
          <p className="item2">Location:{details.locationDetails}</p>
          <p className="item3">Locations covered: {details.serveLocation}</p>
        </div>
        <div className="income">
          <div className="income-circle"></div>
          <div className="income-amount">{details.pricePerDay || 0}/Day</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
