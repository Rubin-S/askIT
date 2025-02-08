import React, { useState } from "react";

function Locate() {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const fetchCoordinates = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location }),
      });

      const data = await response.json();
      if (response.ok) {
        setCoordinates(data);
        setError(null);
      } else {
        setCoordinates(null);
        setError(data.error);
      }
    } catch (err) {
      setCoordinates(null);
      setError("Error fetching data");
    }
  };

  return (
    <div>
      <h1>Get Latitude and Longitude</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchCoordinates}>Fetch Coordinates</button>
      {coordinates && (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Locate;
