import React from "react";

const BotaoEstilizado = () => {
  const estiloBotao = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "40px",
  };
  return <button style={estiloBotao}>Clique em mim que sou charmoso!</button>;
};

export default BotaoEstilizado;
