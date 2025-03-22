import React, { useState, useEffect, useRef } from 'react';
import './styles/OTP.css'; // Import your CSS file

const OTP = ({ onOTPChange, onClose }) => {
  const [otp, setOTP] = useState(['', '', '', '','','']); // State for OTP digits
  const inputRefs = useRef([]); // Refs for OTP input fields

    // Function to handle OTP input change
  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus the next input field
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Pass the OTP value to the parent component
    onOTPChange(newOTP.join(''));
  };

  // Auto-close when all 6 digits are entered
  useEffect(() => {
    if (otp.every((digit) => digit !== '')) {
      onClose(); // Close the popup
    }
  }, [otp, onClose]);

  return (
    <div className="verify-otp-container">
      <h1 className="verify-otp-title">OTP Code</h1>
      <p className="verify-otp-instruction">
        Please type the OTP verification code sent to
      </p>
      <p className="verify-otp-phone-number">+91 9360473130</p>
      <div className="verify-otp-inputs">
        {[...Array(6)].map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
            className="verify-otp-input"
          />
        ))}
      </div>
      <p className="verify-otp-resend">
        Resend code? <span className="verify-otp-timer">Dictat modulo 5H5 7 nugand in 55 sec</span>
      </p>
      <p className="verify-otp-notification">
        Default Notification Settings
      </p>
    </div>
  );
};

export default OTP;