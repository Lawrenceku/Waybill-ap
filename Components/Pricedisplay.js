import React, { useEffect, useState } from 'react';

const PriceDisplay = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appId = '8142409';
        const appSecret = 'XWLTK53ZYVVNRBHVUW294PSJJ6X9QYTK';
        const url = 'https://sandbox.sendstack.africa/deliveries/price';

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
