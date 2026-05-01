import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Botão clicado!");
  };

  return <button onClick={handleClick}>Clique em mim</button>;
};

export default Button;
