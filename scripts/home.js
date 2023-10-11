"use strict";
import { getFromStorage, removeFromStorage } from "./storage.js";
import { currentUser } from "../config/dataUser.js";
const mainContent = document.querySelector("#main-content");
mainContent.style.display = "none";
let currentUsers = getFromStorage("currentUser") || [];
let isLoggedIn = false;
if (currentUsers.length !== 0) {
  // Lấy tham chiếu đến phần tử có id="login-modal"
  isLoggedIn = true;
  currentUsers = JSON.parse(currentUsers);
  console.log(currentUsers);
  const loginModal = document.querySelector("#login-modal");
  const welcomeMessage = document.querySelector("#welcome-message");
  loginModal.style.display = "none";
  mainContent.style.display = "block";
  welcomeMessage.textContent = `Welcome to ${currentUsers[0].user}`;
} else {
  console.log("currentUsers is empty");
}
if (isLoggedIn === true) {
  const btnLogOut = document.querySelector("#btn-logout");

  btnLogOut.addEventListener("click", function () {
    isLoggedIn = false;
    const loginModal = document.querySelector("#login-modal");
    loginModal.style.display = "block";
    mainContent.style.display = "none";
    console.log(currentUsers);
    getFromStorage("currentUsers", currentUsers);
    removeFromStorage("currentUser", currentUser);
  });
}
