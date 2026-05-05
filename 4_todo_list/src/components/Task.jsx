import React from "react";

const Task = ({ task, onRemove, onToggleDone }) => {
  return (
    <li>
      <span
        onClick={onToggleDone}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onRemove}>Remover</button>
    </li>
  );
};

export default Task;
