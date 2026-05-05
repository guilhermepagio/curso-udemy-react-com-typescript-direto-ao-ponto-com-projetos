import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "" || inputValue === null) return;

    const trimmedTask = inputValue.trim();
    if (trimmedTask) {
      onAddTask(trimmedTask);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskInput;
