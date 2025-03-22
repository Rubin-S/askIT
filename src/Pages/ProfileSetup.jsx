import React, { useState } from "react";
import './styles/Verify.css';


import SignUpDetailsForm from "../components/Sign/SignUpDetailsForm";
import ProfileSetup from "../components/Sign/WelcomeProfile";
import SignUpPage from "../components/Sign/SignUp_OTP";



const Profile = () => {

  return (
        <div className="verify-container">
          <div className="verify-left-section">
              <img
              src=""
              alt="Building"
              className="verify-background-image"
              />
          </div>
          <div className="verify-right-section">
            <SignUpDetailsForm />
        </div>
    </div>
  );
};

export default Profile;