"use strict";
import { validateLoginUser } from "../components/Validate.js";
const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", function () {
  console.log("Login success");
  validateLoginUser();
});
