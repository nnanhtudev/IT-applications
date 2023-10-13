"use strict";

import { getFromStorage } from "../scripts/storage.js";
export let userArr = getFromStorage("userArr") || [];
let currentUser = getFromStorage("currentUser") || [];

// Hàm tạo một thể hiện User mới và thêm vào mảng người dùng
export default currentUser;
