import { useState } from "react";
import api from "../api/api";

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    getTodos: () => {
      api.getTodos().then((data) => {
        setTodos(data);
      });
    },
    addTodo: (newTask) => {
      const newTodo = { task: newTask, completed: false };
      api.addTodo(newTodo).then((res) => {
        if (res.status === 201) {
          setTodos([...todos, res.data]);
        }
      });
    },
    removeTodo: (todo) => {
      api.deleteTodo(todo).then((status) => {
        if (status === 200) {
          const updatedTodos = todos.filter((t) => t._id !== todo._id);
          setTodos(updatedTodos);
        }
      });
    },
    toggleTodo: (todo) => {
      api.editTodo({ ...todo, completed: !todo.completed }).then((res) => {
        if (res.status === 200) {
          const updatedTodos = todos.map((t) =>
            t._id === todo._id ? { ...t, completed: res.data.completed } : t
          );
          setTodos(updatedTodos);
        }
      });
    },
    editTodo: (todo, newTask) => {
      api.editTodo({ ...todo, task: newTask, completed: false }).then((res) => {
        if (res.status === 200) {
          const updatedTodos = todos.map((t) =>
            t._id === todo._id ? { ...res.data, task: res.data.task } : t
          );
          setTodos(updatedTodos);
        }
      });
    },
  };
};
