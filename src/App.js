import React, { useState, useEffect } from "react";
import * as braze from "@braze/web-sdk";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    // Add more products as needed
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  useEffect(() => {
    braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
      baseUrl: "sdk.fra-02.braze.eu",
      enableLogging: true,
    });
  }, []);

  return (
    <Router>
      <div>
        <h1>E-commerce App</h1>
        <Routes>
          <Route exact path="/">
            <ProductList products={products} addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
