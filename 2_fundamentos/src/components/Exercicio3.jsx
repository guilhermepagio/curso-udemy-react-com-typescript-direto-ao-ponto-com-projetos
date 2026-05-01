import React from "react";

const Exercicio3 = ({ tasks }) => {
  return (
    <div>
      <h2>Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercicio3;
