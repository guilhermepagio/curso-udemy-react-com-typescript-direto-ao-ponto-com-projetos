import React from "react";

const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <div>
        <h1>Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrinho</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
