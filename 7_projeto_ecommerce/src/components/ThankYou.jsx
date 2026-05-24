import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="thank-you">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: R$ {totalPrice}</p>
      <button onClick={() => navigate("/")}>Voltar para o catálogo</button>
    </div>
  );
};

export default ThankYou;
