import { useState, createContext } from "react";

export const MeuContexto = createContext();

export const MeuProvider = ({ children }) => {
  const [valor, setValor] = useState("Valor do contexto");

  const valorContexto = {
    valor,
    setValor,
  };

  return (
    <MeuContexto.Provider value={valorContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
