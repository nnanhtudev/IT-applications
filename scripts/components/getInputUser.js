"use strict";
export const inputFistName = document.querySelector("#input-firstname");
export const inputLastName = document.querySelector("#input-lastname");
export const inputUsername = document.querySelector("#input-username");
export const inputPassword = document.querySelector("#input-password");
export const inputPasswordConfirm = document.querySelector("#input-password-confirm");

function getInputRegisterUser() {
  let firstName = inputFistName.value;
  let lastName = inputLastName.value;
  let username = inputUsername.value;
  let password = inputPassword.value;
  let passwordConfirm = inputPasswordConfirm.value;
  return {
    firstName,
    lastName,
    username,
    password,
    passwordConfirm,
  };
}

export function getInputLoginUser() {
  let username = inputUsername.value;
  let password = inputPassword.value;
  return {
    username,
    password,
  };
  
}

export default getInputRegisterUser;
