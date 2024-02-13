// Checkout.js
import React from "react";
// import { useCart, useRemoveFromCart } from "../StateProvider";
// import Cart from "./Cart";

import '../App.css'

const Checkout = () => {
  //   const cart = useCart();
  //   const removeFromCart = useRemoveFromCart();

  const handleCheckout = () => {
    // Implement checkout logic
    alert("Checkout complete!");
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
