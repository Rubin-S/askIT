import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OTP from "../Signup/OTP";
import './styles/Verify.css';

const Form2 = () => {
    const navigate = useNavigate();
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOTP] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleOTPChange = (enteredOTP) => {
        setOTP(enteredOTP);
        if (enteredOTP.length === 6) {
            setShowOTP(false);
            setIsVerified(true);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="form2-form">
            <h2 className="form2-title">Join AskIT - Find & Connect Instantly!</h2>
            
            {/* Name and Username */}
            <div className="form2-input-group">
                <div className="form2-input-box">
                    <label htmlFor="name" className="form2-label">NAME*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isVerified}
                        className={isVerified ? 'form2-input-disabled' : 'form2-input'}
                        required
                    />
                </div>
                <div className="form2-input-box">
                    <label htmlFor="username" className="form2-label">USERNAME*</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        disabled={isVerified}
                        className={isVerified ? 'form2-input-disabled' : 'form2-input'}
                        required
                    />
                </div>
            </div>

            {/* Email and OTP */}
          
                <label htmlFor="email" className="form2-label">EMAIL*</label>
                <div className="form2-input-with-button">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="xyz@abc.com"
                        onChange={handleChange}
                        className={isVerified ? 'form2-input-disabled' : 'form2-input-email'}
                        required
                    />
                    <button
                        className={`form2-button ${isVerified ? 'form2-button-verified' : ''}`}
                        onClick={() => setShowOTP(true)}
                        disabled={isVerified}
                    >
                        {isVerified ? 'Verified' : 'Verify now'}
                    </button>
                </div>
  
            {showOTP && (
                <div className="form2-popup-overlay">
                    <OTP
                        onOTPChange={handleOTPChange}
                        onClose={() => setShowOTP(false)}
                    />
                </div>
            )}

            {/* Password Fields */}
            <div className="form2-input-group-password">
                <div className="form2-input-box">
                    <label htmlFor="password" className="form2-label">PASSWORD*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form2-input"
                        required
                    />
                </div>
                <div className="form2-input-box">
                    <label htmlFor="confirmPassword" className="form2-label">CONFIRM PASSWORD*</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="form2-input"
                        required
                    />
                </div>
            </div>

            {/* Terms & Conditions */}
            <div className="form2-checkbox-group">
                <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="agreeToTerms" className="form2-label">
                    I agree with AskIT <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and <a href="#">Notification Settings</a>.
                </label>
            </div>

            {/* Signup Button */}
            <button
                className="form2-button-primary"
                onClick={() => navigate("/ProfileCreation")}
            >
                Create an account
            </button>

            {/* Sign In Link */}
            <p className="form2-signin" onClick={() => navigate("/Search")}>
                Already have an account? <a href="#">Sign In</a>
            </p>
        </div>
    );
};

export default Form2;