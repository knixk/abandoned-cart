// Checkout.js

import React, { useEffect } from 'react';
import * as Braze from '@braze/web-sdk'; // Import Braze SDK

const Checkout = ({ cart }) => {
  useEffect(() => {
    const handleWindowClose = () => {
      if (cart.length > 0) {
        // Track abandoned cart event when user exits the checkout page
        Braze.logCustomEvent('Abandoned Cart', {
          items: cart.map(item => ({
            name: item.name,
            price: item.price,
            // Add more item details as needed
          })),
        });
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, [cart]);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
