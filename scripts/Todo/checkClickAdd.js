"use strict";
import currentUser from "../../config/dataUser.js";
import { addToDo, checkIsUserRenderToDoList } from "../../controllers/Todo/todoControllers.js";
import renderToDoList from "../components/renderTodo.js";
import { getFromStorage } from "../storage.js";

let users = JSON.parse(getFromStorage("currentUser"));
console.log(users);
console.log(users[0].user);
const checkIsUser = async () => {
  const btnAdd = document.querySelector("#btn-add");
  let IsCheckToDo = await checkIsUserRenderToDoList(users);
  console.log(IsCheckToDo);
  if (IsCheckToDo !== undefined) {
    renderToDoList(IsCheckToDo);
  } else {
    console.log(e);
    return;
  }
  btnAdd.addEventListener("click", function () {
    if (currentUser.length === 0) {
      alert("Please Login");
      window.location.href = "/index.html";
    } else {
      addToDo(users);
    }
  });
};

export default checkIsUser;
