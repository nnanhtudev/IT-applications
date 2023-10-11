"use strict";
import User from "../../models/User.js";
import { getFromStorage, saveToStorage } from "../storage.js";
let userArr = getFromStorage("userArr") || [];
function createNewUser(userData) {
  return new Promise((resolve, reject) => {
    let newUser = new User(userData.firstName, userData.lastName, userData.username, userData.password);

    if (userArr.length === 0) {
      userArr.push(newUser);
      saveToStorage("userArr", userArr);
      resolve(newUser);
    } else {
      try {
        let storedUserArr = JSON.parse(getFromStorage("userArr"));
        storedUserArr.push(newUser);
        userArr = storedUserArr; // Cập nhật mảng userArr với dữ liệu từ storage
        saveToStorage("userArr", userArr);
        resolve(newUser);
      } catch (error) {
        reject("Lỗi khi xử lý dữ liệu người dùng", error);
      }
    }
  });
}

// Hàm xử lý đăng ký người dùng
function registerUser(users) {
  return createNewUser(users)
    .then((newUser) => {
      console.log("Đăng ký thành công:", newUser);
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.log("Lỗi đăng ký:", error);
    });
}

export default registerUser;
