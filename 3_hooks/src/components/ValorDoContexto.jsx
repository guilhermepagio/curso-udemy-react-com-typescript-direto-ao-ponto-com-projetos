import React from "react";
import { useContext } from "react";
import { MeuContexto } from "../context/MeuContexto";

const ValorDoContexto = () => {
  const { valor, setValor } = useContext(MeuContexto);

  return (
    <>
      <div>O Valor Do Contexto É: {valor}</div>
      <button onClick={() => setValor("Valor Alterado")}>Alterar Valor</button>
    </>
  );
};

export default ValorDoContexto;
