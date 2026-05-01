import React from "react";

import FilhoFuncao from "./FilhoFuncao";

const PaiFunction = () => {
  const handleChildClick = () => {
    console.log("Evento recebido do filho!");
  };

  return (
    <div>
      <FilhoFuncao onChildClick={handleChildClick} />
    </div>
  );
};

export default PaiFunction;
