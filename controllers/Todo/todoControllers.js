"use strict";
import ToDo from "../../models/ToDoList.js";
import todoArr from "../../config/dataToDoList.js";
import { getFromStorage, saveToStorage } from "../../scripts/storage.js";

const checkIsUserRenderToDoList = (users) => {
  if (todoArr.length === 0) {
    return todoArr;
  } else {
    try {
      let getToDoParent = JSON.parse(todoArr);
      let userCurrent = users[0].user;
      let checkUser = getToDoParent.filter((username) => username.owner === userCurrent);
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
  const todo = new ToDo(inputTask.value, user[0].user, false);
  if (todoArr.length === 0) {
    todoArr.push(todo);
    getFromStorage("todoArr");
    saveToStorage("todoArr", todoArr);
    return;
  } else {
    try {
      let todoArr = JSON.parse(getFromStorage("todoArr"));
      todoArr.push(todo);
      getFromStorage("todoArr");
      saveToStorage("todoArr", todoArr);
      console.log(todoArr);
    } catch (e) {
      console.log(e);
    }
  }
};

export { addToDo, checkIsUserRenderToDoList };
