// StateProvider.js
import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();
let brazeInstance; // Store Braze instance

export const StateProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    // Add more products as needed
  ]);
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const contextValue = {
    products,
    cart,
    addToCart,
    removeFromCart,
    brazeInstance, // Pass Braze instance as context value
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useProducts must be used within a StateProvider");
  }
  return context.products;
};

export const useCart = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useCart must be used within a StateProvider");
  }
  return context.cart;
};

export const useAddToCart = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAddToCart must be used within a StateProvider");
  }
  return context.addToCart;
};

export const useRemoveFromCart = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useRemoveFromCart must be used within a StateProvider");
  }
  return context.removeFromCart;
};

export const useBrazeInstance = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useBrazeInstance must be used within a StateProvider");
  }
  return context.brazeInstance;
};
