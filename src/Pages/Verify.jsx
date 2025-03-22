import React, { useState }  from 'react';
import './styles/Verify.css';
import Form1 from "../components/Verify/Form1";
import Form2 from "../components/Verify/Form2";

const Verify = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="verify-container">
        <div className="verify-left-section">
            <img
            src=""
            alt="Building"
            className="verify-background-image"
            />
        </div>
        <div className="verify-right-section">
            <h2 className="verify-title">Sign up to Ask IT</h2>
            {currentPage === 1 && (
                <Form1
                    onSaveAndContinue={() => {
                    handleNextPage();
                }}
                />
            )}
            {currentPage === 2 && (
                <Form2
                    onSaveAndContinue={() => {
                    handleNextPage();
                }}
                />
            )}
        </div>
    </div>
  );
};

export default Verify;