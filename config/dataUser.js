"use strict";
import User from "../../models/User.js";
import { getFromStorage, saveToStorage } from "../scripts/storage.js";

export let userArr = getFromStorage("userArr") || [];
console.log("🚀 ~ file: dataUser.js:4 ~ userArr:", userArr);

function dataUser(users) {
  // tao user constructor
  let userData = new User(users.firstName, users.lastName, users.username, users.password);
  // check user.length == 0 neu = 0 thi mang rong add user thoai mai
  if (userArr.length === 0) {
    userArr.push(userData);
  } else {
    try {
      //nguoc lai thi nhay vao try tra json ve mang de try cap
      let storedUserArr = JSON.parse(getFromStorage("userArr"));
      storedUserArr.push(userData);
      userArr = storedUserArr; // Cập nhật mảng userArr với dữ liệu từ storage
    } catch (e) {
      console.log(e);
      return; // Nếu có lỗi khi phân tích chuỗi JSON, không thay đổi mảng userArr
    }
  }
  saveToStorage("userArr", userArr);
  window.location.href = "/index.html";
  console.log("Register success", userArr);
}

export default dataUser;
