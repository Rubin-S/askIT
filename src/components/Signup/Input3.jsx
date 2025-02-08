import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Input3.css";


const Input3 = ({ formDetails, onSaveAndContinue }) => {
 const navigate = useNavigate();
 const [formDatas, setFormDatas] = useState({ formDetails });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatas((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAdditionalFields = (field, value) => {
    const updatedField = formDatas[field] || [];
   setFormDatas({ [field]: [...updatedField, value] });
  };

  const handleSave = () => {
    onSaveAndContinue(formDatas);
  }
  const handleSubmit = () => {
    console.log("Submitting form data:", formDatas);
    navigate("/Dashboard")
    handleSave();
  };
  


  return (
    <div className="input3-form3" >
      <h3>Select your working days</h3>
      <div className="input3-working-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="input3-day-row">
            <label>{day}</label>
            <input
              type="time"
              value={formDetails.availability[day]?.from || ""}
              onChange={handleChange}
              placeholder="From"
            />
            <span>to</span>
            <input
              type="time"
              value={formDetails.availability[day]?.to || ""}
              onChange={handleChange}
              placeholder="To"
            />
          </div>
        ))}
      </div>

      <h3>Enter Payment Details</h3>
      <div className="input3-payment-details">
        { (
          <input
            type="text"
            name="materialType"
            value={formDetails.materialType || ""}
            onChange={handleChange}
          />
        ) }
        <label>Enter your Price/Day</label>
        <input
          type="number"
          name="pricePerDay"
          value={formDetails.pricePerDay || ""}
          onChange={handleChange}
          placeholder="Enter price"
        />
        <label>
          Additional Fare: {formDetails.extraFare || "None"}
        </label>
      </div>

      <button className="post-services" onClick={handleSubmit}>
        Post Services
      </button>
    </div>
  );
};

export default Input3;
