import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);

  return (
    <div>
      <p>Tema atual: {contextoTema?.tema}</p>
      <button onClick={contextoTema?.toggleTema}>Alternar Tema</button>
    </div>
  );
};

export default BarraFerramentas;
