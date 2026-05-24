import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
          <div className="total">
            <p>Total: R$ {totalPrice}</p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
