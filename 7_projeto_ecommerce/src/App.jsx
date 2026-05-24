import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import ThankYou from "./components/ThankYou";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    setCartItems((prevItems) => {
      if (!existingItem) {
        return [...prevItems, { ...product, quantity }];
      }

      return prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    });

    if (!existingItem) {
      toast.success(`${product.name} adicionado ao carrinho!`);
    } else {
      toast.info(`${product.name} atualizado no carrinho!`);
    }
  };

  const handleUpdateCart = (product, quantity) => {
    if (quantity <= 0) {
      quantity = 0;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item,
      ),
    );

    if (quantity === 0) {
      toast.error(`${product.name} removido do carrinho!`);
    } else {
      toast.info(`${product.name} atualizado no carrinho!`);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id),
    );
    toast.error(`${product.name} removido do carrinho!`);
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Catálogo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/products"
        >
          Carrinho
        </NavLink>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddToCart} />} />
          <Route
            path="/products"
            element={
              <Cart
                cartItems={cartItems}
                onUpdateCart={handleUpdateCart}
                onRemoveFromCart={handleRemoveFromCart}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
