"use strict";
const renderToDoList = (todoArray) => {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  todoArray.map((item) => {
    let newRowLi = document.createElement("li");
    newRowLi.innerHTML = `
    <li>${item.task}<span class="close">×</span></li>
    `;
    todoList.appendChild(newRowLi);
  });
};
export default renderToDoList;
