import { getFromStorage, saveToStorage } from "../scripts/storage.js";
import User from "../../models/User.js";
let userArr = getFromStorage("userArr") || [];
console.log("🚀 ~ file: dataUser.js:4 ~ userArr:", userArr);
function dataUser(users) {
  let userData = new User(users.firstName, users.lastName, users.username, users.password);
  if (userArr.length === 0) {
    userArr.push(userData);
  } else {
    try {
      let storedUserArr = JSON.parse(getFromStorage("userArr"));
      storedUserArr.push(userData);
      userArr = storedUserArr; // Cập nhật mảng userArr với dữ liệu từ storage
    } catch (e) {
      console.log(e);
      return; // Nếu có lỗi khi phân tích chuỗi JSON, không thay đổi mảng userArr
    }
  }
  saveToStorage("userArr", userArr);
  console.log("Register success", userArr);
}

export default dataUser;
