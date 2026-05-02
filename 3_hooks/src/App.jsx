import "./App.css";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import { MeuProvider } from "./context/MeuContexto";
import ComponentFilho from "./components/ComponentFilho";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Container from "./components/Container";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import ContadorCallback from "./components/ContadorCallback";

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
      {/*8.3 - useReducer */}
      {/*Estados mais complexos*/}
      <Contador />
      {/*8.4 - Custom Hooks */}
      <DisplayWindowSize />
      {/*8.5 - Slots e children props */}
      <Container>
        <h1>Conteúdo do Container - Fora do componente</h1>
        <p>Este é o conteúdo do container. Fora do componente.</p>
        <Contador />
      </Container>
      {/*8.6 - Sincronizar estado com props */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/*8.7 - useMemo e useCallback */}
      <CalculoPesado />
      <ContadorCallback />
    </>
  );
}

export default App;
