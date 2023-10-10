import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const countTasks = () => {
    return store.todos.length;
  };

  useEffect(() => {
    console.log("store.todos:", store.todos);
  }, [store.todos]);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        {store.todos.map((todo) => (
          <li key={todo.id}>{todo.label}</li>
        ))}
      </ul>

      <ul>
        <li>
          <div className="d-flex">
            <textarea
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Things to do"
            ></textarea>

            <button
              onClick={() => {
                console.log("Adding todo:", inputValue);
                actions.addTodo({
                  id: Date.now(), // Generate a unique ID for the new todo
                  label: inputValue,
                });
                setInputValue("");
              }}
            >
              Add
            </button>
          </div>
        </li>

        {store.todos.map((todo) => (
          <li key={todo.id}>
            {todo.label}
            <i
              className="fa-regular fa-trash-can"
              onClick={() => {
                console.log("Deleting todo:", todo.id);
                actions.deleteTodo(todo.id); // Ensure this updates store.todos
              }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

