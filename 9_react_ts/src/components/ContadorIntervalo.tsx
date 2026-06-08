import { useState } from "react";
import useInterval from "../hooks/useInterval";

const ContadorIntervalo = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);

  return <div>ContadorIntervalo: {count}</div>;
};

export default ContadorIntervalo;
