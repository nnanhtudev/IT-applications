"use strict";
import validateUser from "../components/Validate.js";

const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", function () {
  validateUser();
});
