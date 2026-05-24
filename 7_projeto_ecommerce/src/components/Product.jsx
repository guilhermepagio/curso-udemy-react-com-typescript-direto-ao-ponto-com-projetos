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
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;
