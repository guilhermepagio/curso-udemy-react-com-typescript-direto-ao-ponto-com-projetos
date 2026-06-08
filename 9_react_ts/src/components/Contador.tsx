import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

const Contador = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Contador</h1>
      <p>Count: {value}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Contador;
