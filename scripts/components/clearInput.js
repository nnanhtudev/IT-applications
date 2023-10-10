"use strict";
import * as input from "./getDataUser.js";

function clearInput() {
  input.inputFistName.value = "";
  input.inputLastName.value = "";
  input.inputUsername.value = "";
  input.inputPassword.value = "";
  input.inputPasswordConfirm.value = "";
}

export default clearInput;
