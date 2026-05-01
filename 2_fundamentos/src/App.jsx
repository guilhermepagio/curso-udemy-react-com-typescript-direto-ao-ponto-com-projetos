import "./App.css";

import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderConditional from "./components/RenderConditional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoCorolido from "./components/BotaoCorolido";
import Exercicio1 from "./components/Exercicio1";
import Exercicio2 from "./components/Exercicio2";
import Exercicio3 from "./components/Exercicio3";

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
      {/*6.6 - useState -> hook*/}
      <Counter />
      {/*6.7 - múltiplos estados */}
      <UserInfoForm />
      {/*6.8 - Eventos */}
      <Button />
      {/*6.9 - Passando funçoes de manipulação de eventos como props */}
      <PaiFunction />
      {/*6.10 - Eventos de Form */}
      <Form />
      {/*6.11 - Renderização Condicional */}
      <RenderConditional user="João" />
      {/*6.11 - Renderização Condicional sem usuário */}
      <RenderConditional />
      {/*6.12 - Expressão Ternária */}
      <LoginButton logedIn={true} />
      <LoginButton logedIn={false} />
      {/*6.13 - Render nulo */}
      <Warning warning={null} />
      <Warning warning="This is a warning message!" />
      {/*6.14 - Listas Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      {/*6.14 - Estilizar Componentes */}
      <BotaoEstilizado />
      {/*6.15 - Estilos Globais */}
      <BotaoCorolido />
      {/*6.16 - Exercícios */}
      <Exercicio1 name="João" />
      <Exercicio2 />
      <Exercicio3 tasks={["Tarefa 1", "Tarefa 2", "Tarefa 3"]} />
    </>
  );
}

export default App;
