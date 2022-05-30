import React from "react";
import { useState, useEffect } from "react";
import { Input } from "./Input";
import { List } from "./List";
import { userInfo } from "./userInfo";

export const Main = () => {
  const [todo, setTodo] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({});
  const [filter, setFilter] = useState("");

  const ascendingOrder = () => {
    const ascendingList = todo.sort((a, b) => (a.name > b.name ? 1 : -1));
    setTodo([...ascendingList]);
  };
  const descendingOrder = () => {
    const descendingList = todo.sort((a, b) => (a.name < b.name ? 1 : -1));
    setTodo([...descendingList]);
  };
  const TodoItems = (name) => {
    const newTodo = [...todo, { name, id: todo.length + 1 }];
    setTodo(newTodo);
  };
  const updateTodoList = (value) => {
    let updatedTodo = [...todo];
    updatedTodo.splice(value.id, 1);
    updatedTodo.push(value);
    updatedTodo.sort((a, b) => a.id - b.id);
    setTodo(updatedTodo);
    setUpdateTodo({});
  };
  const deleteTodos = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const editTodos = (index) => {
    setUpdateTodo(todo[index]);
  };

  return (
    <div id="heading">
      <h1>Todo List</h1>
      <Input
        TodoItems={TodoItems}
        updateTodoList={updateTodoList}
        updateTodo={updateTodo}
      />
      <button id="aobtn" onClick={ascendingOrder}>
        Ascending Order
      </button>
      <button onClick={descendingOrder}>Descending Order</button>
      <div id="search">
        Search:
        <input
          type="text"
          placeholder="Type to Search"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table style={{ textAlign: "centre" }}>
        <tr>
          <th> No</th>
          <th>Create</th>
          <th>Change</th>
        </tr>
        {todo
          .filter((search) => search.name.toLowerCase().includes(filter))
          .map((data, index) => (
            <tr>
              <td>{data.id}</td>

              <td>
                <List
                  key={index}
                  index={index}
                  data={data}
                  // deleteTodos={deleteTodos}
                  // editTodos={editTodos}
                />
              </td>
              <td>
                <button onClick={() => editTodos(index)}>Edit</button>
                <button onClick={() => deleteTodos(index)}>Remove</button>
              </td>
            </tr>
          ))}
      </table>
      <Datepicker />
      <userInfo />
    </div>
  );
};
