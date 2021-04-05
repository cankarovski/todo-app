import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = {
  getTodos: async () => {
    let res = await axios.get(`${API_URL}/todos`);
    console.log(res);
    return res.data;
  },
  addTodo: async (todo) => {
    let res = await axios.post(`${API_URL}/todos`, todo);
    console.log(res);
    return res;
  },
  editTodo: async (todo) => {
    let res = await axios.put(`${API_URL}/todos/${todo._id}`, todo);
    console.log(res);
    return res;
  },
  deleteTodo: async (todo) => {
    let res = await axios.delete(`${API_URL}/todos/${todo._id}`, todo);
    console.log(res);
    return res.status;
  },
};

export default api;
