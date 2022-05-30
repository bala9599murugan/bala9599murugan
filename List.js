import React from "react";
import { Todolist } from "./TodoList";

export const List = ({ data, index, deleteTodos, editTodos }) => {
  return (
    <div id="Todo_List">
      <Todolist name={data} />
      {/* <li>{data.name}</li> */}
    </div>
  );
};
