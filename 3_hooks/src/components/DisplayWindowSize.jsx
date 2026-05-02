import useWindowSize from "../hooks/useWindowSize";

const DisplayWIndowsSize = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <p>Largura: {windowSize.width}</p>
      <p>Altura: {windowSize.height}</p>
    </div>
  );
};

export default DisplayWIndowsSize;
