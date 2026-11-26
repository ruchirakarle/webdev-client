"use client";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import * as client from "./client";
import type { Todo } from "./client";
export default function Lab6Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("Learn Mongoose");
  const findAll = async () => {
    const data = await client.findAllTodos();
    setTodos(data);
  };
  const findCompleted = async () => {
    const data = await client.findCompletedTodos();
    setTodos(data);
  };
  const create = async () => {
    const todo = await client.createTodo({ title, completed: false });
    setTodos([...todos, todo]);
  };
  const toggle = async (todo: Todo) => {
    const saved = await client.updateTodo({ ...todo, completed: !todo.completed });
    setTodos(todos.map((t) => (t._id === todo._id ? saved : t)));
  };
  const remove = async (id: string) => {
    await client.deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };
  useEffect(() => {
    const load = async () => {
      const data = await client.findAllTodos();
      setTodos(data);
    };
    load();
  }, []);
  return (
    <div id="wd-lab6-todos">
      <h3>Lab 6 todos (Mongoose CRUD)</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <button type="button" onClick={findAll} id="wd-lab6-find-all"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Find all
        </button>
        <button type="button" onClick={findCompleted} id="wd-lab6-find-completed"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
          Find completed
        </button>
        <button type="button" onClick={create} id="wd-lab6-create"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white">
          Create
        </button>
        <input value={title} onChange={(e) => setTitle(e.target.value)} id="wd-lab6-title"
          className="rounded border border-neutral-300 px-2 py-1" />
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li key={todo._id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={todo.completed} onChange={() => toggle(todo)} />
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            </label>
            <FaTrash onClick={() => remove(todo._id)} className="cursor-pointer text-red-600" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}