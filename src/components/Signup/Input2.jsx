import React, {useState} from "react";
import "./styles/Input2.css";

const SecondForm = ({ formDatas, onSaveAndContinue }) => {

  const [formData, setFormData] = useState({ formDatas });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAdditionalFields = (field, value) => {
    const updatedField = formData[field] || [];
   setFormData({ [field]: [...updatedField, value] });
  };

  const handleSave = () => {
    onSaveAndContinue(formData);
  }

  return (
    <div className="input2-form2" >
      <h3>Enter Location Details</h3>
      <form>
        <label>Enter your location details</label>
        <input
          type="text"
          name="locationDetails"
          value={formData.locationDetails }
          onChange={handleChange}
        />

        <label>Enter the location you want to serve</label>
        <input
          type="text"
          name="serveLocation"
          value={formData.serveLocation || ""}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => handleAdditionalFields("serveLocations", formData.serveLocation)}
        >
          Add Location
        </button>

        <h3>Add Your Contact Details</h3>

        <label>Mobile Number</label>
        <input
          type="number"
          name="mobileNumber"
          value={formData.mobileNumber || ""}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => handleAdditionalFields("additionalNumbers", formData.mobileNumber)}
        >
          Add Another Number
        </button>
        <br />
        <label>WhatsApp Number</label>
        <input
          type="number"text
          name="whatsappNumber"
          className="input2-number"
          value={formData.whatsappNumber || ""}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            className="input2-check"
          />
          Same as Mobile Number
        </label>

        <label>Email Address</label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress || ""}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => handleAdditionalFields("additionalEmails", formData.emailAddress)}
        >
          Add Another Mail
        </button>

        <button type="button" onClick={handleSave}>
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
