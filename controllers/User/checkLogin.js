"use strict";
import { getFromStorage, saveToStorage } from "../../scripts/storage.js";
import currentUser from "../../config/dataUser.js";
const isUserTake = function (usernameInput, passwordInput) {
  let user = getFromStorage("userArr");
  if (!Array.isArray(user)) {
    console.log("UserArr is not in array form, attempting to parse...");
    try {
      user = JSON.parse(user);
    } catch (error) {
      console.log("Unable to parse userArr as JSON:", error);
      return;
    }
  } else {
    console.log("UserArr is in array form");
  }

  function getUserName(user) {
    return new Promise((resolve, reject) => {
      let username = user
        .filter((user) => {
          return user.username === usernameInput;
        })
        .map((user) => user.username);
      if (usernameInput.length > 0) {
        // Chuyển mảng usernames thành chuỗi bằng phương thức join()
        let usernameString = username.join(", ");
        // So sánh chuỗi với usernameInput
        if (usernameString === usernameInput) {
          resolve(usernameString);
        } else {
          reject("UserName is incorrect");
        }
      } else {
        reject("Please enter username");
      }
    });
  }
  function getPasswordByUserName(username) {
    return new Promise((resolve, reject) => {
      let password = user
        .filter((user) => {
          return username.includes(user.username);
        })
        .map((user) => user.password); // Lọc và lấy danh sách passwords.
      let passwordString = password.join(", ");
      if (passwordInput.length > 0) {
        if (passwordString === passwordInput) {
          resolve(passwordString);
        } else {
          reject("Password is incorrect");
        }
      } else {
        reject("Please enter password");
      }
    });
  }
  getUserName(user)
    .then((username) => {
      console.log(username);
      return getPasswordByUserName(usernameInput).then((password) => {
        return {
          user: username,
          password: password,
        };
      });
    })
    .then((data) => {
      currentUser.push(data);
      saveToStorage("currentUser", currentUser);
      window.location.href = "/index.html";
    })
    .catch((e) => {
      alert(e);
    });
};

export default isUserTake;
