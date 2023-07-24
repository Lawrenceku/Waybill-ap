import React, { useEffect, useState } from 'react';

const PriceDisplay = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appId =  process.env.API_APP_ID;
        const appSecret = process.env.API_APP_SECRET;
        const url = 'https://sendstack.africa/api/v1/deliveries/price';

        const response = await fetch(url, {
          headers: {
            Authorization: `Basic ${btoa(`${appId}:${appSecret}`)}`,
          },
        });

        const data = await response.json();
        setPrice(data.price);
      } catch (error) {
        console.error('Error fetching data:', error);
        // error handling
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {price !== null ? (
        <p>The price is: {price}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PriceDisplay;
