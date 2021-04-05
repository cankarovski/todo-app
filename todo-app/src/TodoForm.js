import React, { useContext } from "react";
import "./TodoForm.css";
import useInputState from "./hooks/useInputState";
import { MethodsContext } from "./context/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(MethodsContext);

  return (
    <form
      className="TodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (value !== "") {
          addTodo(value);
          reset();
        }
      }}
    >
      <input
        type="text"
        className="TodoForm-input"
        value={value}
        onChange={handleChange}
      />
      <button className="TodoForm-submit" type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
