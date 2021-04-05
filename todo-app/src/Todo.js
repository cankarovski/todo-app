import React, { memo, useContext } from "react";
import "./Todo.css";
import useToggleState from "./hooks/useToggleState";
import TodoEdit from "./TodoEdit";
import { MethodsContext } from "./context/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo(props) {
  const [editing, toggleEditing] = useToggleState();
  const { editTodo, removeTodo, toggleTodo } = useContext(MethodsContext);

  const submitTodo = (newTask) => {
    if (newTask !== "") {
      editTodo({ ...props }, newTask);
    }
    toggleEditing();
  };

  const deleteTodo = () => {
    removeTodo({ ...props });
  };

  const toggleCompleted = () => {
    toggleTodo({ ...props });
  };

  return (
    <div className="Todo">
      <div className="Todo-container">
        {editing ? (
          <TodoEdit onSave={submitTodo} task={props.task} />
        ) : (
          <>
            <p
              className={`Todo-task ${props.completed && "completed"}`}
              onClick={toggleCompleted}
            >
              {props.task}
            </p>
            <button className="Todo-edit" onClick={toggleEditing}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </>
        )}
        <button className="Todo-remove" onClick={deleteTodo}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default memo(Todo);
