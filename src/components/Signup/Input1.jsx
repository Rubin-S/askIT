import React, { useState } from "react";
import "./styles/Input1.css";

const Input = ({ detail,onSaveAndContinue }) => {
  const [details, setDetails] = useState({ detail });

  const handleSubmit = () => {
    onSaveAndContinue(details); // Pass form data to the parent component
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({...prevDetails,[name]: value,}));
  };

  return (
      <div className="input1-form1" >
        <h3>Enter your services detail</h3>
        <form>
          <div className="input1-name">
            <div className="input1-hold-name">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="input1-name-input"
                value={details.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input1-hold-name">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="input1-name-input"
                value={details.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Profession </label>
          <input
            type="text"
            className="input1-Prof-name"
            name="professionName"
            value={details.professionName}
            onChange={handleChange}
          />
          <label>Job Description</label>
          <textarea
          className="input1-job-desc"
            name="jobDescription"
            value={details.jobDescription}
            onChange={handleChange}
          />
          <label>Services Offered</label>
          <input
            className="input1-serv"
            type="text"
            name="servicesOffered"
            value={details.servicesOffered}
            onChange={handleChange}
          />
          <label>Certification</label>
          <input
            type="text"
            name="certification"
            value={details.certification}
            onChange={handleChange}
          />
          <label></label>
          <div>
            <label htmlFor="certification-upload" className="input1-custom-file-button">
              Add Certification
            </label>
            <input
              type="file"
              id="certification-upload"
              name="certificationFile"
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  certificationFile: e.target.files[0],
                }))
              }
              style={{ display: "none" }}
            />
          </div>
        </form>
        <div className="input1-save">
          <button onClick={handleSubmit}>Save and Continue</button>
        </div>
      </div>
  );
};

export default Input;
