import React from "react";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Quantidade: {item.quantity}</p>
      <div className="cart-buttons">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value) || 0)}
        />
        <button className="remove" onClick={() => onRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
