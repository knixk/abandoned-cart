// Checkout.js
import React from "react";
import { useCart, useSetCart } from "../StateProvider";
// import Cart from "./Cart";
import StateContext from "../StateProvider";
import { useContext } from "react";
import "../App.css";

/* 

POST /users/events HTTP/1.1
Host: sdk.fra-02.braze.eu
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "api_key": "YOUR_API_KEY",
  "events": [
    {
      "external_id": "USER_EXTERNAL_ID",
      "name": "Custom Event Name",
      "time": "2024-02-08T12:00:00Z",
      "properties": {
        "key1": "value1",
        "key2": "value2"
      }
    }
  ]
}



*/

const Checkout = () => {
  //   const cart = useCart();
  const setCart = useSetCart();
  //   const removeFromCart = useRemoveFromCart();

  const handleCheckout = () => {
    // Implement checkout logic
    alert("Checkout complete!");
    setCart([]);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Checkout</button>
      <hr />
      <h3>Cart Summary</h3>
    </div>
  );
};

export default Checkout;
