import "./App.css";

import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";

function App() {
  return (
    <>
      {/*6.1 - Criação de componente*/}
      <Welcome></Welcome>
      {/*6.2 - Expressões JSX*/}
      <BomDia></BomDia>
      {/*6.3 - Componente dentro de componente*/}
      <Pai />
    </>
  );
}

export default App;
