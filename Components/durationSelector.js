import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function DurationSelector() {
  const [selectedDuration, setSelectedDuration] = useState(1); // State to hold the selected duration

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Duration</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDuration}
        label="Pickup Date"
        onChange={handleDurationChange}
      >
        <MenuItem value={1}>One month</MenuItem>
        <MenuItem value={2}>Two months</MenuItem>
        <MenuItem value={3}>Three months</MenuItem>
        <MenuItem value={4}>Four months</MenuItem>
        <MenuItem value={5}>Five months</MenuItem>
        <MenuItem value={6}>Greater than five months</MenuItem>
      </Select>
    </FormControl>
  );
}
