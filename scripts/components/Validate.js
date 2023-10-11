"use strict";
import getInputRegisterUser from "./getInputUser.js";
import { getInputLoginUser } from "./getInputUser.js";
import registerUser from "./checkRegister.js";
import clearInput from "./clearInput.js";
import { userArr } from "../../config/dataUser.js";
import { getFromStorage } from "../storage.js";
import isUserTake from "./checkLogin.js";

export function validateLoginUser() {
  const formData = getInputLoginUser();
  isUserTake(formData.username, formData.password);
}

function validateUser() {
  const formData = getInputRegisterUser();
  const usernameRegex = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\.?\d*$]{6,}.*)$/;
  if (
    (formData.firstName && formData.lastName && formData.username && formData.password && formData.passwordConfirm) ===
    ""
  ) {
    alert("All fields must be entered");
    return;
  }
  if (!isNaN(formData.firstName)) {
    alert("FirstName cannot be numbered or hollow");
    return;
  }
  if (!isNaN(formData.lastName)) {
    alert("LastName cannot be numbered or hollow");
    return;
  }
  if (formData.username == usernameRegex) {
    alert("Username cannot contain special characters or hollow");
    return;
  }
  if (isUsernameTaken(formData.username)) {
    alert("Username is already taken");
    return;
  }
  if (formData.password.length <= 8) {
    alert("Password must have at least 8 characters");
    return;
  }
  if (formData.password !== formData.passwordConfirm) {
    alert("Password not match or ");
    return;
  }
  clearInput();
  registerUser(formData);
}

function isUsernameTaken(username) {
  //neu dang ki lan dau thi username chua co tren he thong return true
  if (userArr.length === 0) {
    return;
  } else {
    try {
      // neu userArr khong rong thi dich nguoc ve mang de truy cap duoc thuoc tinh cua arr
      // dich nguoc json ve mang userArr de dung function some
      let userArr = JSON.parse(getFromStorage("userArr"));
      // Kiểm tra xem username đã tồn tại trong danh sách người dùng hay chưa
      return userArr.some((user) => user.username === username);
    } catch (e) {
      console.log(e);
      return; // Nếu có lỗi khi phân tích chuỗi JSON, không thay đổi mảng userArr
    }
  }
}

export default validateUser;
