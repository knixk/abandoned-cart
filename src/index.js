import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as braze from "@braze/web-sdk";

// Initialize Braze
braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
  baseUrl: "sdk.fra-02.braze.eu",
  enableLogging: true,
});

// Identify the current user
braze.changeUser("1");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
