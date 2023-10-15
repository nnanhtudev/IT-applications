"use strict";
import ToDo from "../../models/ToDoList.js";
import todoArr from "../../config/dataToDoList.js";
import currentUser from "../../config/dataUser.js";
import { getFromStorage, saveToStorage } from "../../scripts/storage.js";
import renderToDoList from "../../scripts/components/renderTodo.js";

const IsUserRdTdList = (users) => {
  if (todoArr.length === 0) {
    return todoArr;
  } else {
    try {
      let userCurrent = users[0].user;
      let checkUser = todoArr.filter((username) => username.owner === userCurrent);
      return checkUser;
    } catch (e) {
      console.log(e);
    }
  }
};

const addToDo = (user) => {
  const inputTask = document.querySelector("#input-task");
  if (inputTask.value == "") {
    alert("Please enter input");
    return;
  }
  console.log(IsUserRdTdList(currentUser));
  // Sử dụng filter để tìm tất cả các công việc của owner cụ thể
  let checkOwner = todoArr.filter((task) => task.owner === currentUser[0].user);
  console.log(checkOwner);
  // Kiểm tra xem taskToCheck đã tồn tại cho owner cụ thể hay chưa
  let checkTask = checkOwner.some((tasks) => tasks.task.toLowerCase() === inputTask.value.toLowerCase());
  if (checkTask) {
    alert("Task already exists");
    inputTask.value = "";
  } else {
    const todo = new ToDo(inputTask.value, user[0].user, false);
    todoArr.push(todo);
    inputTask.innerHTML = "";
    inputTask.value = "";
    renderToDoList(IsUserRdTdList(currentUser));
    console.log(todoArr);
    saveToStorage("todoArr", todoArr);
  }
};

function deleteToTo(todoArr) {
  const btnClose = document.querySelectorAll("#todo-list .close");
  btnClose.forEach((close) => {
    close.addEventListener("click", () => {
      console.log("Click Success");
      let getCloseTask = close.getAttribute("close-task");
      console.log(getCloseTask);
      let getCloseIsDone = close.getAttribute("close-isDone");
      console.log(getCloseIsDone);
      const cloneTask = todoArr.findIndex((cls) => cls.task == getCloseTask && cls.owner == getCloseIsDone);
      console.log("🚀 ~ file: renderTodo.js:29 ~ close.addEventListener ~ cloneTask:", cloneTask);

      if (cloneTask !== -1) {
        todoArr.splice(cloneTask, 1);
        saveToStorage("todoArr", todoArr);
        alert(`Delete task ${getCloseTask} Success`);
        location.href = location.href;
        renderToDoList(IsUserRdTdList(currentUser));
      }
    });
  });
}
export { addToDo, IsUserRdTdList, deleteToTo };
