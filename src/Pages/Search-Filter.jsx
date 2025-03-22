import React, { useState, useEffect } from "react";
import { Card } from "../components/Search/card";
import "./styles/Search-Filter.css";
import Login from '../components/Navtopage/Login';

export const Filter = () => {
  const mockData = [
    {
      name: "John Doe",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "New York",
      availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
      rating: "4.8",
      reviews: "10000",
      price: "₹1500/Hour",
      postedDate: "12-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Jane Smith",
      profession: "Mason",
      experience: "5",
      skills: "5",
      location: "Los Angeles",
      availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
      rating: "4.5",
      reviews: "8500",
      price: "₹1400/Hour",
      postedDate: "15-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Mike Johnson",
      profession: "Bricklayer",
      experience: "5",
      skills: "5",
      location: "Chicago",
      availableDays: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      rating: "4.7",
      reviews: "9500",
      price: "₹1600/Hour",
      postedDate: "18-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Emily Davis",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "New York",
      availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
      rating: "4.9",
      reviews: "12000",
      price: "₹1700/Hour",
      postedDate: "10-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Davis",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "Nanded",
      availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
      rating: "4.6",
      reviews: "9000",
      price: "₹1450/Hour",
      postedDate: "20-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Kathir",
      profession: "Carpenter",
      experience: "5",
      skills: "5",
      location: "Gandhipuram, R.S. Puram, Saibaba Colony",
      availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
      rating: "4.8",
      reviews: "10000",
      price: "₹1500/Hour",
      postedDate: "12-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Alex Green",
      profession: "Plumber",
      experience: "5",
      skills: "5",
      location: "Houston",
      availableDays: ["Monday", "Tuesday", "Friday", "Sunday"],
      rating: "4.7",
      reviews: "8800",
      price: "₹1350/Hour",
      postedDate: "05-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Sophia Brown",
      profession: "Painter",
      experience: "5",
      skills: "5",
      location: "Los Angeles",
      availableDays: ["Monday", "Thursday", "Friday", "Saturday"],
      rating: "4.6",
      reviews: "9500",
      price: "₹1300/Hour",
      postedDate: "08-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
  ];

  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [location, setLocation] = useState("");
  const [isVerified, setIsVerified] = useState(null); // null = no filter, true = verified, false = unverified
  const [filteredData, setFilteredData] = useState(mockData);

  // Extract unique locations from the dataset for the dropdown
  const uniqueLocations = [...new Set(mockData.map((item) => item.location))];

  // Automatically filter data whenever search, location, or isVerified changes
  useEffect(() => {
    const filtered = mockData.filter((item) => {
      const searchTerm = search.toLowerCase();

      // Search through multiple fields
      const matchesSearch =
        search === "" || // Show all results if search is empty
        item.name.toLowerCase().includes(searchTerm) ||
        item.profession.toLowerCase().includes(searchTerm) ||
        item.skills.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm);

      const matchesLocation = location === "" || item.location === location;
      const matchesVerification =
        isVerified === null || item.isVerified === isVerified;

      return matchesSearch && matchesLocation && matchesVerification;
    });
    setFilteredData(filtered);
  }, [search, location, isVerified]);

  // Toggle verified filter between true, false, and null
  const handleVerifiedToggle = () => {
    if (isVerified === true) {
      setIsVerified(false);
    } else if (isVerified === false) {
      setIsVerified(null);
    } else {
      setIsVerified(true);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearch("");
    setLocation("");
    setIsVerified(null); 
  };


      const handleVerification = () => {
            setShowLogin(true);
    }

  return (
    <div className="container">

                {showLogin && (
                  <div className="verify-popup-overlay">
                  <Login
                      onClose={() => setShowLogin(false)}
                   />
                  </div>
              )}
      <div className="user-filter-container">
        <div className="user-container">
          <h1 className="user-search-filter">Filters</h1>
          <div className="user-search">
            <div className="user-search-ele1">
              <input
                type="search"
                className="user-search-input"
                placeholder="Search by keyword, Skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="user-search-ele2"
              >
                <option value="">Locations</option>
                {uniqueLocations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="user-search-ele3" >
              <input
                type="radio"
                id="verified"
                name="verification"
                checked={isVerified === true}
                onChange={handleVerifiedToggle}
              />
              <label htmlFor="verified">Verified Services</label>
            </div>
            <div className="user-search-ele4">
              <button onClick={handleClearFilters}>Clear Filters</button>
            </div>
          </div>
          <p className="user-search-text">
            Most searches: Masons and Bricklayers...
          </p>
        </div>

        {/* Render filtered data */}
        <div className="user-results" onClick={handleVerification}>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => <Card key={index} data={item} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;