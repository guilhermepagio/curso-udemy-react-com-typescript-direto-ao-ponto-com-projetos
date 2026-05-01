import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import { MeuProvider } from "./context/MeuContexto";
import ComponentFilho from "./components/ComponentFilho";
import ValorDoContexto from "./components/ValorDoContexto";

function App() {
  return (
    <>
      {/*8.1 - UseEffect */}
      <ExemploUseEffect />
      <Timer />

      {/*8.2 - Context API */}
      <MeuProvider>
        {/* Componentes que consomem o contexto */}
        <ComponentFilho />
        <ValorDoContexto />
      </MeuProvider>
    </>
  );
}

export default App;
