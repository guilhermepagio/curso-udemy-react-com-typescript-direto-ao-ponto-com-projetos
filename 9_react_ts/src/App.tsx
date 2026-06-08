import "./App.css";

import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import ContadorIntervalo from "./components/ContadorIntervalo";
import Contador from "./components/Contador";
import { TemaProvider } from "./contexts/TemaContext";
import BarraFerramentas from "./components/BarraFerramentas";
import ExibirPostagens from "./components/ExibirPostagens";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      <Greeting name="Alice" />
      <Counter />
      <TextInput />
      <ContadorIntervalo />
      <Contador />
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      <ExibirPostagens />
    </>
  );
}

export default App;
