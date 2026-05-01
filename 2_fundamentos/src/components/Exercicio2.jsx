import React from "react";
import { useState } from "react";

const Exercicio2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Quantidade de Cliques: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Exercicio2;
