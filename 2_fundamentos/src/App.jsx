import "./App.css";

import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";

function App() {
  return (
    <>
      {/*6.1 - Criação de componente*/}
      <Welcome />
      {/*6.2 - Expressões JSX*/}
      <BomDia />
      {/*6.3 - Componente dentro de componente*/}
      <Pai />
      {/*6.4 - Props */}
      <Descricao nome="João" idade={25} />
      {/*6.5 - Desestruturação de props */}
      <Cachorro nome="Rex" raca="Labrador" />
    </>
  );
}

export default App;
