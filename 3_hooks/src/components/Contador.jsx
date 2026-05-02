import { useReducer } from "react";

const estadoInicial = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "incrementar":
      console.log("Renderizando Contador");
      return { contador: state.contador + 1 };
    case "decrementar":
      console.log("Renderizando Contador");
      return { contador: state.contador - 1 };
    case "resetar":
      console.log("Renderizando Contador");
      return { contador: 0 };
    default:
      throw new Error("Ação desconhecida");
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "resetar" })}>Resetar</button>
    </div>
  );
};

export default Contador;
