import React, { useContext, useEffect } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import { MethodsContext, TodosContext } from "./context/TodoContext";
import useToggleState from "./hooks/useToggleState";

export default function TodoList() {
  const todos = useContext(TodosContext);
  const { getTodos } = useContext(MethodsContext);
  const [hideCompleted, toggleHideCompleted] = useToggleState(false);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="TodoList">
      <div className="TodoList-filter">
        <input
          type="checkbox"
          id="filterCompleted"
          name="filterCompleted"
          defaultChecked={hideCompleted}
          onChange={toggleHideCompleted}
        />
        <label htmlFor="filterCompleted">Filter completed tasks</label>
      </div>
      {todos.length === 0 ? (
        <div className="TodoList-empty">No todos!</div>
      ) : (
        todos.map((todo) => {
          if (hideCompleted) {
            if (!todo.completed) {
              return <Todo key={todo._id} {...todo} />;
            }
          } else return <Todo key={todo._id} {...todo} />;
        })
      )}
    </div>
  );
}
