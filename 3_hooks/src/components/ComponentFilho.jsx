import React from "react";
import { useContext } from "react";
import { MeuContexto } from "../context/MeuContexto";

const ComponentFilho = () => {
  const { valor } = useContext(MeuContexto);
  return (
    <>
      <p>Mensagem do Contexto: {valor}</p>
      <div>ComponentFilho</div>
    </>
  );
};

export default ComponentFilho;
