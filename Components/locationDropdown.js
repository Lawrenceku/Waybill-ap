import React, { useState, useEffect } from 'react';

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('https://sandbox.sendstack.africa/api/v1/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch locations.');
        }
        const data = await response.json();
        setLocations(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching locations. Please try again later.');
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div>{error}</div>}
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
