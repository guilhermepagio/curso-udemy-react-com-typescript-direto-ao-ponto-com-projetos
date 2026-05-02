import { useState, useMemo } from "react";

const CalculoPesado = () => {
  const [count, setCount] = useState(0);

  const resultado = useMemo(() => {
    // Simula um cálculo pesado
    let total = 0;
    for (let i = 0; i < 1000000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Resultado: {resultado}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default CalculoPesado;
