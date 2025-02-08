import React, { useState } from "react";
import "./styles/Portfolio.css";

function App() {
  const [activeTab, setActiveTab] = useState("About");
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState("");

  const handleAddPhoto = () => {
    if (newPhoto) {
      setPhotos([...photos, newPhoto]);
      setNewPhoto("");
    }
  };

  return (
    <div className="app-container">
      <div className="profile-banner">
        
      </div>
      <div className="profile-content">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-img"></div>
            <div className="profile-name">
              <h2>Kathir</h2>
              <p>Carpenter</p>
            </div>
            <div className="rating">
              <span>4.8</span>
              <div className="rating-stars">
                <div className="stars">★★★★☆</div>
                <p>
                  Based on
                  10,000 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="profile-details">
            {/* Tabs Section */}
            <div className="profile-tabs">
              <button
                className={`tab ${activeTab === "About" ? "active" : ""}`}
                onClick={() => setActiveTab("About")}
              >
                About
              </button>
              <button
                className={`tab ${activeTab === "Photos" ? "active" : ""}`}
                onClick={() => setActiveTab("Photos")}
              >
                Photos
              </button>
              <button
                className={`tab ${activeTab === "Analytics" ? "active" : ""}`}
                onClick={() => setActiveTab("Analytics")}
              >
                Analytics
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "About" && (
                <div className="About">
                  <h3>My Services</h3>
                  <p>
                    I provide quality woodworking and carpentry services, from
                    custom furniture and cabinets to detailed woodwork. Whether
                    it's a small repair or a big project, I ensure a perfect
                    finish every time.
                  </p>
                </div>
              )}
              {activeTab === "Photos" && (
                <div className="Photos">
                  <h3>Photos</h3>
                  <div className="photo-grid">
                    {photos.map((photo, index) => (
                      <div key={index} className="photo-placeholder">
                        <img src={photo} alt={`Uploaded ${index + 1}`} />
                      </div>
                    ))}
                    <div className="add-photo-section">
                      <input
                        type="text"
                        placeholder="Enter photo URL"
                        value={newPhoto}
                        onChange={(e) => setNewPhoto(e.target.value)}
                      />
                      <button onClick={handleAddPhoto}>Add Photo</button>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Analytics" && (
                <div>
                  <h3>Analytics</h3>
                  <p>Feedback needs to be added here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;
