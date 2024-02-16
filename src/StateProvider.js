// StateProvider.js
import React, { createContext, useState, useEffect, useContext } from "react";
import * as braze from "@braze/web-sdk";

export const StateContext = createContext();

console.log("sending");
// braze.logCustomEvent('test event');

const macbookImage =
  "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/m/b/mbp14-spacegray-select-202110-removebg-preview_2__1.png";

export const StateProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10.99, image: macbookImage },
    { id: 2, name: "Product 2", price: 19.99, image: macbookImage },
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

  useEffect(() => {
    // Send abandoned cart event when the user navigates away or closes the page
    const handleBeforeUnload = () => {
      if (cart.length > 0) {
        sendAbandonedCartEvent(cart);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  const sendAbandonedCartEvent = (cartItems) => {
    const payload = {
      cartItems: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })),
    };

    braze.logCustomEvent("Abandoned Cart 4", {
      id: payload.cartItems.id,
      name: payload.cartItems.name,
      price: payload.cartItems.price,
      image: payload.cartItems.image,
    });

    // Send abandoned cart event to Braze
    // braze.logCustomEvent(payload);
    // braze.logCustomEvent('Abandoned Cart');
  };

  return (
    <StateContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        brazeInitialized,
        setCart,
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

export const useSetCart = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useSetCart must be used within a StateProvider");
  }
  return context.setCart;
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
