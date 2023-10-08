import { getFromStorage } from "../storage.js";
import getDataUser from "./getDataUser.js";
import dataUser from "../../config/dataUser.js";
function validateUser() {
  const formData = getDataUser();
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
  } else if (!isNaN(formData.lastName)) {
    alert("LastName cannot be numbered or hollow");
    return;
  } else if (formData.username == usernameRegex) {
    alert("Username cannot contain special characters or hollow");
    return;
  } else if (isUsernameTaken(formData.username)) {
    alert("Username is already taken");
    return;
  } else if (formData.password.length < 8) {
    alert("Password must have at least 8 characters");
    return;
  } else if (formData.password !== formData.passwordConfirm) {
    alert("Password not match or ");
    return;
  }
  dataUser(formData);
}

function isUsernameTaken(username) {
  // Truy xuất danh sách người dùng từ bộ nhớ hoặc từ nơi lưu trữ dữ liệu của bạn
  let userArr = JSON.parse(getFromStorage("userArr"));
  // Kiểm tra xem username đã tồn tại trong danh sách người dùng hay chưa
  return userArr.some((user) => user.username === username);
}

export default validateUser;
