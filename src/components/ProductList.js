// ProductList.js
import React from "react";
import { useProducts, useAddToCart } from "../StateProvider";

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
            <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Call addToCart function */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
