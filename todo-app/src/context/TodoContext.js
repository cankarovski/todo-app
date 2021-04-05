import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();
export const MethodsContext = createContext();

export function TodosProvider(props) {
  const {
    todos,
    getTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  } = useTodoState([]);

  return (
    <TodosContext.Provider value={todos}>
      <MethodsContext.Provider
        value={{ getTodos, addTodo, removeTodo, toggleTodo, editTodo }}
      >
        {props.children}
      </MethodsContext.Provider>
    </TodosContext.Provider>
  );
}
