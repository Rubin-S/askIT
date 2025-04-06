import React from 'react';
import './styles/ProfileCreation.css';


const ProfileCreation = ({ onBack }) => {
  return (
    <div className="profilePic-container">
        <button className="profilePic-back-btn" onClick={onBack}>
          <img src="{backIcon}" alt="Back" className="profilePic-back-icon" />
        </button>
        <h1 className="profilePic-title">Welcome! Let's create your profile</h1>
        <p className="profilePic-subtitle">Let others get to know you better!</p>

        <div className="profilePic-picture-section">
          <div>
            <h2 className="profilePic-picture-title">Add a profile picture</h2>
            <img
              src="default-profile.jpg" 
              alt="Profile"
              className="profilePic-image"
            />
          </div>
          <div>
            <button className="profilePic-choose-btn">Choose Image</button>
            <p className="profilePic-default-text">Or choose one of our defaults</p>
          </div>
        </div>

        <div className="profilePic-button-group">
          <button className="profilePic-continue-without-btn">
            Continue Without Image
          </button>
          <button className="profilePic-continue-btn">Continue</button>
        </div>
      </div>
  );
};

export default ProfileCreation;