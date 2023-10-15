"use strict";

import { getFromStorage } from "../scripts/storage.js";

let todoArr = getFromStorage("todoArr") || [];
(function () {
  if (todoArr.length !== 0) {
    // console.log(todoArr);
    try {
      let storeTodo = JSON.parse(todoArr);
      todoArr = storeTodo;
      // console.log(storeTodo);
    } catch (error) {
      console.log(error);
    }
  }
})();

export default todoArr;
