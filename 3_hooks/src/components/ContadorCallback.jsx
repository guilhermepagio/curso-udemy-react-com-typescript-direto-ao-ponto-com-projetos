import React, { useCallback, useState } from "react";

const Botao = React.memo(({ onClick, children }) => {
  console.log("Renderizando Botão");
  return <button onClick={onClick}>{children}</button>;
});

const ContadorCallback = () => {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  );
};

export default ContadorCallback;
