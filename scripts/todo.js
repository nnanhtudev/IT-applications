"use strict";
import currentUser from "../config/dataUser.js";
import { IsUserRdTdList, addToDo } from "../controllers/Todo/todoControllers.js";
import renderToDoList from "./components/renderTodo.js";

const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", () => {
  if (currentUser.length === 0) {
    alert("Please login first");
    window.location.href = "/index.html";
    return;
  }
  addToDo(currentUser);
});
renderToDoList(IsUserRdTdList(currentUser));
