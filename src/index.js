import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as braze from "@braze/web-sdk";

// Initialize Braze
braze.initialize("40c49a97-701a-48e8-b025-3eb5b62adedd", {
  baseUrl: "sdk.iad-03.braze.com",
  enableLogging: true,
});

// Identify the current user
braze.changeUser("2");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
