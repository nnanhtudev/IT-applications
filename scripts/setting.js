"use strict";
import validateValueInput from "../controllers/Setting/settingController.js";

const btnSaveSetting = document.querySelector("#btn-submit");

btnSaveSetting.addEventListener("click", () => {
  console.log("Click save Success");
  validateValueInput();
});
