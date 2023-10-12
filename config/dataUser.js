"use strict";

import { getFromStorage } from "../scripts/storage.js";
export let userArr = getFromStorage("userArr") || [];
export let currentUser = getFromStorage("currentUser") || [];
console.log("🚀 ~ file: dataUser.js:4 ~ userArr:", userArr);

// Hàm tạo một thể hiện User mới và thêm vào mảng người dùng
