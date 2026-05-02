import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      {children}
      <p>Este é o conteúdo do container. Dentro do componente.</p>
    </div>
  );
};

export default Container;
