// App.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { StateProvider } from "./StateProvider";
import * as braze from "@braze/web-sdk";

import { useAnalytics } from "@segment/analytics-react";
import { useRef } from "react";

const App = () => {
  const { page } = useAnalytics();
  page();

  const feed = useRef();

  const handleToggle = (e) => {
    braze.toggleContentCards(feed);
    console.log(feed)
    console.log("toggled");
  };

  const handleHide = (e) => {
    braze.hideContentCards();

    console.log("hide");
  };

  const handleShow = (e) => {
    braze.showContentCards(feed);

    console.log("shown");
  };

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
          <button onClick={handleToggle} id="toggle" type="button">
            Toggle Cards Feed
          </button>
          <button id="hide" type="button" onClick={handleHide}>
            Hide Cards Feed
          </button>
          <button id="show" type="button" onClick={handleShow}>
            Show Cards Feed
          </button>
        </nav>

        <div ref={feed} className="feed">
        </div>

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
