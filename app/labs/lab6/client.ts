import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const LAB6_API = `${HTTP_SERVER}/lab6`;
export type Todo = { _id: string; title: string; completed: boolean };
export const fetchConnection = async () => {
  const { data } = await axios.get(`${LAB6_API}/connection`);
  return data;
};
export const findAllTodos = async () => {
  const { data } = await axios.get(`${LAB6_API}/todos`);
  return data;
};
export const findCompletedTodos = async () => {
  const { data } = await axios.get(`${LAB6_API}/todos?completed=true`);
  return data;
};
export const findTodoById = async (id: string) => {
  const { data } = await axios.get(`${LAB6_API}/todos/${id}`);
  return data;
};
export const createTodo = async (todo: { title: string; completed: boolean }) => {
  const { data } = await axios.post(`${LAB6_API}/todos`, todo);
  return data;
};
export const updateTodo = async (todo: Todo) => {
  const { data } = await axios.put(`${LAB6_API}/todos/${todo._id}`, todo);
  return data;
};
export const deleteTodo = async (id: string) => {
  const { data } = await axios.delete(`${LAB6_API}/todos/${id}`);
  return data;
};