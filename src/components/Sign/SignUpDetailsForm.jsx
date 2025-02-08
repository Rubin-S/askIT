import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./styles/SignUpDetailsForm.css"

const SignUpDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validatePassword = (password) => {
    const passwordRules = {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const passwordErrors = [];
    if (!passwordRules.minLength) passwordErrors.push("At least 8 characters");
    if (!passwordRules.hasUpperCase) passwordErrors.push("One uppercase letter");
    if (!passwordRules.hasLowerCase) passwordErrors.push("One lowercase letter");
    if (!passwordRules.hasNumber) passwordErrors.push("One number");
    if (!passwordRules.hasSpecialChar) passwordErrors.push("One special character");

    return passwordErrors;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password).join(", "),
      confirmPassword: formData.password !== formData.confirmPassword 
        ? "Passwords do not match" 
        : ""
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === "") &&
                   formData.name !== "" &&
                   formData.username !== "" &&
                   formData.agreeToTerms;

    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Validate the field in real-time as the user types
    if (name === 'email' || name === 'password' || name === 'confirmPassword') {
      validateForm();
    }
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    // Validate the field when the user moves away from it
    validateForm();
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched to show all errors
    setTouched({
      email: true,
      password: true,
      confirmPassword: true
    });

    // Validate the form again before submission
    validateForm();

    if (!isFormValid) {
      console.log('Form is invalid. Please fix the errors.');
      return;
    }

    console.log('Form submitted:', formData);
  };

  // Helper function to show error message only if field is touched
  const ErrorMessage = ({ field, message }) => (
    touched[field] && message ? <p className="text-red-500 text-xs mt-1">{message}</p> : null
  );

  return (
    <div className="SignUpDetailsForm-max-w-md SignUpDetailsForm-w-full SignUpDetailsForm-mx-auto SignUpDetailsForm-p-4 SignUpDetailsForm-sm:p-6 SignUpDetailsForm-bg-gray-100 SignUpDetailsForm-rounded-3xl relative">
      <button
        id='SignUpDetailsForm-button'
        onClick={() => {}} // Add your back handler
        className="SignUpDetailsForm-absolute SignUpDetailsForm-top-4 SignUpDetailsForm-left-4 SignUpDetailsForm-p-2 SignUpDetailsForm-rounded-full SignUpDetailsForm-hover:bg-gray-200 SignUpDetailsForm-transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="SignUpDetailsForm-h-6 SignUpDetailsForm-w-6 SignUpDetailsForm-text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <form onSubmit={handleSubmit} className="SignUpDetailsForm-space-y-4">
        <h1 id='SignUpDetailsForm-h1' className="SignUpDetailsForm-text-2xl SignUpDetailsForm-sm:text-3xl SignUpDetailsForm-font-semibold SignUpDetailsForm-mb-2 SignUpDetailsForm-text-center">
          Sign up to Ask IT
        </h1>
        
        <div className="SignUpDetailsForm-space-y-1 SignUpDetailsForm-text-center">
          <p className="SignUpDetailsForm-text-sm SignUpDetailsForm-sm:text-base">
            Your Google account Joseph will be connected to your new Ask IT account
          </p>
          <p className="SignUpDetailsForm-text-sm SignUpDetailsForm-sm:text-base">
            <a id='SignUpDetailsForm-a' href="#" className="SignUpDetailsForm-text-blue-600 SignUpDetailsForm-hover:underline">
              Wrong identity? Start over
            </a>
          </p>
        </div>

        <div className="SignUpDetailsForm-grid SignUpDetailsForm-grid-cols-1 SignUpDetailsForm-sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="SignUpDetailsForm-block SignUpDetailsForm-text-sm SignUpDetailsForm-mb-1">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="SignUpDetailsForm-w-full SignUpDetailsForm-px-3 SignUpDetailsForm-py-2 SignUpDetailsForm-border rounded-md SignUpDetailsForm-focus:outline-none SignUpDetailsForm-focus:ring-2 SignUpDetailsForm-focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="SignUpDetailsForm-block SignUpDetailsForm-text-sm SignUpDetailsForm-mb-1">
              Username*
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="SignUpDetailsForm-w-full SignUpDetailsForm-px-3 SignUpDetailsForm-py-2 SignUpDetailsForm-border SignUpDetailsForm-rounded-md SignUpDetailsForm-focus:outline-none SignUpDetailsForm-focus:ring-2 SignUpDetailsForm-focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="SignUpDetailsForm-block SignUpDetailsForm-text-sm SignUpDetailsForm-mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            className={`SignUpDetailsForm-w-full SignUpDetailsForm-px-3 SignUpDetailsForm-py-2 SignUpDetailsForm-border SignUpDetailsForm-rounded-md SignUpDetailsForm-focus:outline-none SignUpDetailsForm-focus:ring-2 SignUpDetailsForm-focus:ring-blue-500 ${
              touched.email && errors.email ? 'SignUpDetailsForm-border-red-500' : ''
            }`}
            required
          />
          <ErrorMessage field="email" message={errors.email} />
        </div>

        <div>
          <label htmlFor="password" className="SignUpDetailsForm-block SignUpDetailsForm-text-sm SignUpDetailsForm-mb-1">
            Password*
          </label>
          <div className="SignUpDetailsForm-relative">
            <input
              type={showPassword.password ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur('password')}
              className={`SignUpDetailsForm-w-full SignUpDetailsForm-px-3 SignUpDetailsForm-py-2 SignUpDetailsForm-border SignUpDetailsForm-rounded-md SignUpDetailsForm-focus:outline-none SignUpDetailsForm-focus:ring-2 SignUpDetailsForm-focus:ring-blue-500 ${
                touched.password && errors.password ? 'SignUpDetailsForm-border-red-500' : ''
              }`}
              required
            />
            <button
              id='SignUpDetailsForm-button'
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="SignUpDetailsForm-absolute SignUpDetailsForm-right-3 SignUpDetailsForm-top-1/2 -translate-y-1/2 SignUpDetailsForm-text-gray-500"
            >
              {showPassword.password ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <ErrorMessage field="password" message={errors.password} />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="SignUpDetailsForm-block SignUpDetailsForm-text-sm SignUpDetailsForm-mb-1">
            Confirm password*
          </label>
          <div className="SignUpDetailsForm-relative">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={() => handleBlur('confirmPassword')}
              className={`SignUpDetailsForm-w-full SignUpDetailsForm-px-3 SignUpDetailsForm-py-2 SignUpDetailsForm-border SignUpDetailsForm-rounded-md SignUpDetailsForm-focus:outline-none SignUpDetailsForm-focus:ring-2 SignUpDetailsForm-focus:ring-blue-500 ${
                touched.confirmPassword && errors.confirmPassword ? 'SignUpDetailsForm-border-red-500' : ''
              }`}
              required
            />
            <button
              id='SignUpDetailsForm-button'
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="SignUpDetailsForm-absolute SignUpDetailsForm-right-3 SignUpDetailsForm-top-1/2 -translate-y-1/2 SignUpDetailsForm-text-gray-500"
            >
              {showPassword.confirmPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <ErrorMessage field="confirmPassword" message={errors.confirmPassword} />
        </div>

        <div className="SignUpDetailsForm-flex SignUpDetailsForm-items-start SignUpDetailsForm-gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="SignUpDetailsForm-mt-1"
            required
          />
          <label htmlFor="agreeToTerms" className="SignUpDetailsForm-text-sm">
            I agree with Ask IT{' '}
            <a id='SignUpDetailsForm-a' href="#" className="SignUpDetailsForm-underline">
              Terms of Service
            </a>
            ,{' '}
            <a id='SignUpDetailsForm-a' href="#" className="SignUpDetailsForm-underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a id='SignUpDetailsForm-a' href="#" className="SignUpDetailsForm-underline">
              default Notification Settings
            </a>
          </label>
        </div>

        <button
        id='SignUpDetailsForm-button'
          type="submit"
          className="SignUpDetailsForm-w-full SignUpDetailsForm-px-4 SignUpDetailsForm-py-2 SignUpDetailsForm-bg-black SignUpDetailsForm-text-white SignUpDetailsForm-rounded-full SignUpDetailsForm-hover:bg-gray-800 SignUpDetailsForm-transition-all"
          onClick={() => navigate("/Search")}
        >
          Create an account
        </button>

        <p className="SignUpDetailsForm-text-sm SignUpDetailsForm-text-center">
          Already have an account?{' '}
          <a id='SignUpDetailsForm-a' href="#" className="SignUpDetailsForm-text-black SignUpDetailsForm-underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpDetailsForm;