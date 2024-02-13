// BrazeContext.js
import React, { createContext, useState, useContext } from "react";

// Create Braze context
const BrazeContext = createContext();

// Braze provider component
export const BrazeProvider = ({ children }) => {
  const [brazeInitialized, setBrazeInitialized] = useState(false);

  const initializeBraze = () => {
    // Initialize Braze SDK
    // Example: braze.initialize("your-api-key", { ... });
    setBrazeInitialized(true);
  };

  return (
    <BrazeContext.Provider value={{ brazeInitialized, initializeBraze, setBrazeInitialized }}>
      {children}
    </BrazeContext.Provider>
  );
};

// Custom hook to consume Braze context
export const useBraze = () => useContext(BrazeContext);
