import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutButton = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn("Seu carrinho está vazio!");
      return;
    }

    navigate("/thank-you", { state: { cartItems } });

    toast.success("Compra finalizada com sucesso!");
    setCartItems([]);
  };

  return <button onClick={handleCheckout}>Finalizar Compra</button>;
};

export default CheckoutButton;
