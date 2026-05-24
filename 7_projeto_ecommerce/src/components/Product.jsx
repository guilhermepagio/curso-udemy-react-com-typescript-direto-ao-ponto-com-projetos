import React from "react";
import { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <img src={product.image} alt={product.name} />
      <div className="cart-buttons">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
