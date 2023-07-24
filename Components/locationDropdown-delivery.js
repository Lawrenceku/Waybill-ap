 import React, { useState, useEffect } from 'react';
 import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

 const LocationDropdownDelivery = ()=>{
  
 const [locations, setLocations] = useState([]);
 const [selectedLocation, setSelectedLocation] = useState('');
 const [error, setError] = useState(null);

 useEffect(() => {
   const appId =  process.env.API_APP_ID;
   const appSecret = process.env.API_APP_SECRET;
   const apiUrl = 'https://sendstack.africa/api/v1/locations';

   // Fetch locations data from the API with authentication headers
   fetch(apiUrl, {
     headers: {
       'Content-Type': 'application/json',
       'X-App-ID': appId,
       'X-App-Secret': appSecret,
     },
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error('API request failed');
       }
       return response.json();
     })
     .then((data) => {
       setLocations(data);
     })
     .catch((error) => {
       setError('Error fetching locations. Please try again later.');
       console.error('Error fetching locations:', error);
     });
 }, []);

 const handleChange = (event) => {
   setSelectedLocation(event.target.value);
 };
  return(
    <>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Drop-off Location</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedLocation}
        label="Pickup Location"
        onChange={handleChange}
      >
        {locations.map((location) => (
          <MenuItem key={location.id} value={location.name}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </>
  )
}
export default LocationDropdownDelivery
/*
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
 */
