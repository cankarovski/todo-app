import React from "react";
import "./TodoApp.css";
import { TodosProvider } from "./context/TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <h1 className="TodoApp-title">
        todo<span>app</span>
      </h1>
      <div className="TodoApp-container">
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </div>
    </div>
  );
}
