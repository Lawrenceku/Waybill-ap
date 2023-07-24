import React, { useState, useEffect } from 'react';

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('https://sandbox.sendstack.africa/locations');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }

    fetchLocations();
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <h3>Select a Location:</h3>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select a location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
      {selectedLocation && (
        <p>Selected Location ID: {selectedLocation}</p>
      )}
    </div>
  );
};

export default LocationDropdown;
