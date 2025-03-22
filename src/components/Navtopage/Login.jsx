import React, { useState } from 'react';
import './styles/Login.css';

const Login = ({onClose}) => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        {!showEmailLogin ? (
          <>
            <h1 className="login-title">Log in to your account</h1>
            <p className="login-subtitle">Welcome back !!!</p>

            <button className="login-google-btn">
              <img src="{googleIcon}" alt="Google Icon" className="login-google-icon" />
              Continue with Google
            </button>

            <button className="login-email-btn" onClick={() => setShowEmailLogin(true)}>
              Continue with number/email
            </button>

            <button className="login-stay-logged-out-btn" onClick={onClose}>
              Stay Logged Out
            </button>

            <p className="login-signup-text">
              Don’t have an account? <a href="/signup" className="login-signup-link">Sign up</a>
            </p>
          </>
        ) : (
          <>
            <h1 className="login-title">Log In</h1>
            <p className="login-subtitle">Enter your Registered Mobile no or Email</p>

            <form className="login-form">
              <label className="login-label">Mobile no / Email</label>
              <input
                type="text"
                className="login-input"
                required
              />

              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                required
              />

              <button type="submit" className="login-submit-btn">
                Log In
              </button>
            </form>

          </>
        )}
      </div>
    </div>
  );
};

export default Login;
