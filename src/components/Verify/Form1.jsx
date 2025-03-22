import React, { useState }  from 'react';
import './styles/Verify.css';
import OTP from "../Signup/OTP";

const Form1 = ({onSaveAndContinue}) => {
  const [showOTP, setShowOTP] = useState(false); 
  const [otp, setOTP] = useState(''); 
  const [isVerified, setIsVerified] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSubmit = () => {
    onSaveAndContinue(); 
  };


   const handleOTPChange = (enteredOTP) => {
    setOTP(enteredOTP);
    if (enteredOTP.length === 6) {
      setShowOTP(false); 
      setIsVerified(true);

    }
  };

    const handleVerification = () => {
        if (phoneNumber > 1000000000) {
            setShowOTP(true);
            document.getElementById('alert').innerHTML = "";
        } else {
            document.getElementById('alert').innerHTML = "Please enter a valid phone number";
        }

    }


  return (
            <div className="verify-form">
                <div className="verify-form-group">
                    <label className="verify-label">Continue with Mobile Number *</label>
                    <div className="verify-mobile-input">
                        <select className="verify-country-code">
                        <option>+91</option>
                        </select>
                        <input
                            type="text"
                            value={phoneNumber}
                            placeholder="XXXXXXXXXX"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            disabled={isVerified} // Disable input if verified
                            className={isVerified ? 'verify-phone-disabled' : 'verify-phone-input'}
                        />
                        <button 
                            className={`verify-button ${isVerified ? 'verify-button-verified' : ''}`} 
                            onClick={handleVerification}
                            disabled={isVerified}
                        >
                            {isVerified ? 'Verified' : 'Verify Now'}
                        </button>
                    </div>
                    <p id='alert' className="verify-label" style={{color: "red"}}></p>
                    {showOTP && (
                        <div className="verify-popup-overlay">
                        <OTP
                            onOTPChange={handleOTPChange}
                            onClose={() => setShowOTP(false)}
                        />
                        </div>
                    )}
                </div>
                <div className="verify-or-separator">or</div>
                <div className="verify-button-group-ver">
                    <button className="verify-google-button">Sign up with google</button>
                    <button className="verify-email-button">Sign up with email</button>
                </div>
                <p className="verify-terms">
                By creating an account you agree with our Terms of Service, Privacy
                Policy, and our default Notification Settings.
                </p>
                <p className="verify-signin-link">Already have an account? Sign In</p>
                <div className="verify-button-group-hor">
                    <button className="verify-home-button">Go to Home</button>
                    <button className="verify-complete-button" onClick={handleSubmit}>Continue Signup</button>
                </div>
            </div>

  );
}
export default Form1;