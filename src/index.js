import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as braze from "@braze/web-sdk";
import { createClient, AnalyticsProvider } from "@segment/analytics-react";
import * as amplitude from "@amplitude/analytics-browser";
import ReactGA from "react-ga4";

const GAMI = "G-YCW8P6QVEL"

// initializing google analytics..
ReactGA.initialize(GAMI);

const AMPLITUDE_API_KEY = "26944fb8ad12bb5c658c04e5a532babb";

// Option 3, initialize with user ID if it's already known
amplitude.init(AMPLITUDE_API_KEY, "shrivastavakanishk3@gmail.com");

const segmentWriteKey = "Zy5DkIrDCK7nYGfLjsuZND6F2IBQFhfX";

// Initialize Segment client
const segmentClient = createClient({ writeKey: segmentWriteKey });

/* Omitting the braze SDK For now... as we're using the segment integration */
// Initialize Braze
braze.initialize("40c49a97-701a-48e8-b025-3eb5b62adedd", {
  baseUrl: "sdk.iad-03.braze.com",
  enableLogging: true,
});

// Identify the current user in Braze
// braze.changeUser("2");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AnalyticsProvider client={segmentClient}>
    <App />
  </AnalyticsProvider>
);
