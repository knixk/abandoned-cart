// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import * as braze from "@braze/web-sdk";

const App = () => {
  // Initialize Braze outside of the StateProvider
  useEffect(() => {
    braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
      baseUrl: "sdk.fra-02.braze.eu",
      enableLogging: true,
    });
  }, []);

  return (
    <StateProvider>
      <Router>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/checkout" className="nav-link">
            Checkout
          </Link>
        </nav>
        <div className="container">
          <h1 className="heading">E-commerce App</h1>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Cart />
        </div>
      </Router>
    </StateProvider>
  );
};

export default App;
