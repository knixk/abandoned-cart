// BrazeContext.js
import React, { createContext, useState, useContext } from "react";

const BrazeContext = createContext();

export const BrazeProvider = ({ children }) => {
  const [brazeInitialized, setBrazeInitialized] = useState(false);

  return (
    <BrazeContext.Provider value={{ brazeInitialized, setBrazeInitialized }}>
      {children}
    </BrazeContext.Provider>
  );
};

export const useBraze = () => {
  const context = useContext(BrazeContext);
  if (!context) {
    throw new Error("useBraze must be used within a BrazeProvider");
  }
  return context;
};
