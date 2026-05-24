import { useState, useEffect } from "react";

import data from "../data/products_mock.json";

import Product from "./Product";

const Catalog = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <h1>Catálogo</h1>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
