// StateProvider.js
import React, { createContext, useState, useEffect, useContext } from "react";
import * as braze from "@braze/web-sdk";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    // Add more products as needed
  ]);
  const [cart, setCart] = useState([]);
  const [brazeInitialized, setBrazeInitialized] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Initialize Braze SDK
  useEffect(() => {
    braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
      baseUrl: "sdk.fra-02.braze.eu",
      enableLogging: true,
    });
    setBrazeInitialized(true);
  }, []);

  return (
    <StateContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        brazeInitialized,
        setBrazeInitialized,
      }}
    >
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

export const useBrazeInitialized = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useBrazeInitialized must be used within a StateProvider");
  }
  return context.brazeInitialized;
};
