// Cart.js
import React from "react";
import { useCart, useRemoveFromCart } from "../StateProvider";

const Cart = () => {
  const cart = useCart();
  const removeFromCart = useRemoveFromCart(); // Access removeFromCart function
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img height={200} src={item.image} alt={item.name} />
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
