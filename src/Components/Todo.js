import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleTaskComplete = () => {
    toggleComplete(task.id);
  };

  const handleDeleteTask = () => {
    deleteTodo(task.id);
  };

  const handleEditTask= () =>{
    editTodo(task.id)
  }

  return (
    <div className="Todo">
      <p
        onClick={handleTaskComplete}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTask} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTask} />
      </div>
    </div>
  );
};
