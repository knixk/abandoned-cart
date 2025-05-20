// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { StateProvider } from "./StateProvider";

import { useAnalytics } from "@segment/analytics-react";

const App = () => {
  const { page } = useAnalytics();
  page();

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
