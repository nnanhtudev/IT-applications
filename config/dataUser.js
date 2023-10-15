"use strict";

import { getFromStorage } from "../scripts/storage.js";
export let userArr = getFromStorage("userArr") || [];
let currentUser = getFromStorage("currentUser") || [];
if (currentUser.length !== 0) {
  // console.log(currentUser);
  try {
    let storeCrrUser = JSON.parse(currentUser);
    currentUser = storeCrrUser;
    // console.log(storeCrrUser);
  } catch (error) {
    console.log(error);
  }
}
// Hàm tạo một thể hiện User mới và thêm vào mảng người dùng
export default currentUser;
