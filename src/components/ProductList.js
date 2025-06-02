// ProductList.js
import React from "react";
import { useProducts, useAddToCart } from "../StateProvider";
import * as braze from "@braze/web-sdk";


const ProductList = () => {
  const products = useProducts();
  const addToCart = useAddToCart(); // Access addToCart function

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
          <img height={200} src={product.image} alt={product.name} />
            {product.name} - ${product.price}{" "}
            <button onClick={() => {
              addToCart(product);
              braze.logCustomEvent("add_to_cart");
              console.log("add_to_cart event fired")
            }}>Add to Cart</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
