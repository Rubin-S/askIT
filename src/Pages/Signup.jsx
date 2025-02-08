import React, { useState } from "react";
import "./styles/Signup.css";
import Card from "../components/Signup/Card";
import Input1 from "../components/Signup/Input1";
import Input2 from "../components/Signup/Input2";
import Input3 from "../components/Signup/Input3";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    professionName: "",
    jobDescription: "",
    servicesOffered: "",
    certification: "",
    locationDetails: "",
    serveLocation: "",
    mobileNumber: "",
    whatsappNumber: "",
    emailAddress: "",
    income: "",
    availability: {}
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({...prevData,[field]: value,}));
  };

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="form">

      <Card details={formData} />

      {currentPage === 1 && (
        <Input1
            detail={formData}
            onSaveAndContinue={(updatedData) => {
            setFormData((prev) => ({ ...prev, ...updatedData }));
            handleNextPage();
          }}
        />
      )}
      {currentPage === 2 && (
        <Input2
            formDatas={formData}
            onSaveAndContinue={(updatedData) => {
            setFormData((prev) => ({ ...prev, ...updatedData }));
            handleNextPage();
          }}
        />
      )}
      {currentPage === 3 && (
        <Input3
            formDetails={formData}
            onSaveAndContinue={(updatedData) => {
            setFormData((prev) => ({ ...prev, ...updatedData }));
          }}
      />
      )}
    </div>
  );
};

export default Signup;
