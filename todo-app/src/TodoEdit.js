import React, { useEffect, useRef } from "react";
import useInputState from "./hooks/useInputState";
import "./TodoEdit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TodoEdit(props) {
  const [value, handleChange] = useInputState(props.task);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.classList.add("bckgrnd-col");
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="TodoEdit"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSave(value);
      }}
    >
      <input
        type="text"
        className="TodoEdit-input"
        value={value}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="TodoEdit-save" type="submit">
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </form>
  );
}
