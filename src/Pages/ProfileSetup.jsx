import React, { useState } from "react";


import SignUpDetailsForm from "../components/Sign/SignUpDetailsForm";
import ProfileSetup from "../components/Sign/WelcomeProfile";
import SignUpPage from "../components/Sign/SignUp_OTP";



const Profile = () => {

  return (
    <div className="min-h-screen flex items-center justify-center ">    
     <SignUpDetailsForm />
    </div>
  );
};

export default Profile;