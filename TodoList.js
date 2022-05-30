import React from "react";

export const Todolist = ({ name }) => {
  return (
    <div id="Todo_List">
      <li>{name.name}</li>
    </div>
  );
};
