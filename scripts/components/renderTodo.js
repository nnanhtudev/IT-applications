"use strict";

import { getFromStorage, saveToStorage } from "../storage.js";
import { deleteToTo } from "../../controllers/Todo/todoControllers.js";
const renderToDoList = (todoArr) => {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  let html = todoArr.map(
    (item) =>
      ` 
    <li class="${item.isDone == false ? "" : "checked"}" owner=${item.owner} data-task='${item.task}' data-isDone="${
        item.isDone
      }">${item.task}<span close-task="${item.task}" close-isDone=${item.owner}  class="close">×</span></li>
    `
  );
  todoList.innerHTML = html.join("");
  deleteToTo(todoArr);
  // Đặt mã JavaScript ở đây
  const tasks = document.querySelectorAll("#todo-list li");
  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      let getTask = task.getAttribute("data-task");
      let getIsDone = task.getAttribute("data-isDone");
      let ownerIS = task.getAttribute("owner");
      // Kiểm tra trạng thái hiện tại và thay đổi nó
      if (getIsDone === "true") {
        getIsDone = false;
        task.setAttribute("data-isDone", "false");
        task.classList.toggle("checked");
      } else {
        getIsDone = true;
        task.setAttribute("data-isDone", "true");
        task.classList.toggle("checked");
      }
      // Tìm công việc cần cập nhật trong mảng todoArr
      const updateTask = todoArr.find((ow) => ow.owner == ownerIS && ow.task == getTask);
      console.log(updateTask);
      if (updateTask !== undefined) {
        updateTask.isDone = getIsDone;
        saveToStorage("todoArr", todoArr);
      }
    });
  });
};
export default renderToDoList;
