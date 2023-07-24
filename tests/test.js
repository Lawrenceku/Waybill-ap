// home.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './path/to/Home'; // Replace with the actual path to your Home component

// Mock the API response for locations
jest.mock('./path/to/apiModule', () => ({
  fetchLocations: jest.fn(() =>
    Promise.resolve({
      data: [
        { id: 1, name: 'Location 1' },
        { id: 2, name: 'Location 2' },
        // Add more locations as needed
      ],
    })
  ),
}));

describe('Home component', () => {
  test('renders correctly', async () => {
    render(<Home />);
    
    // Ensure that the component renders without errors
    expect(screen.getByText('Sendstack')).toBeInTheDocument();
    expect(screen.getByText('Plan Your Ride')).toBeInTheDocument();
    expect(screen.getByText('Enter pickup & dropoff details. Estimate instantly.')).toBeInTheDocument();

    // Ensure the API call was made and locations were fetched
    await screen.findByText('Pickup Location');
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();
    // Add more location checks as needed
  });

  test('updates selectedLocation state when location is selected', async () => {
    render(<Home />);

    await screen.findByText('Pickup Location');

    // Select a location from the dropdown
    const selectElement = screen.getByLabelText('Pickup Location');
    fireEvent.change(selectElement, { target: { value: 'Location 1' } });

    // Ensure that the selectedLocation state updates accordingly
    expect(selectElement.value).toBe('Location 1');
  });
});
