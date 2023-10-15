"use strict";
import setting from "../../config/configSettingNewPG.js";
import currentUser from "../../config/dataUser.js";
import { saveToStorage } from "../../scripts/storage.js";
const inputPageSize = document.querySelector("#input-page-size");
const inputCategory = document.querySelector("#input-category");

const getInputValue = () => {
  let pageSizeST = inputPageSize.value;
  let categoryST = inputCategory.value;
  if (currentUser.length === 0) {
    alert("Please login first, before setting");
    window.location.href = "/index.html";
    return;
  } else {
    let ownerST = currentUser[0].user;
    return {
      pageSizeST,
      categoryST,
      ownerST,
    };
  }
};

const validateValueInput = async () => {
  let getDataInput = getInputValue();
  if (getDataInput.pageSizeST === "") {
    alert("Please enter a value Page Size");
    return;
  }
  console.log(getDataInput.ownerST);
  if (setting.length === 0) {
    setting.push(getDataInput);
    saveToStorage("setting", setting);
    return;
  }
  const existingUserIndex = setting.findIndex((user) => user.ownerST === getDataInput.ownerST);
  if (existingUserIndex !== -1) {
    // Update the existing user's pageSizeST and categoryST
    setting[existingUserIndex].pageSizeST = getDataInput.pageSizeST;
    setting[existingUserIndex].categoryST = getDataInput.categoryST;
    saveToStorage("setting", setting);
  } else {
    setting.push(getDataInput);
    saveToStorage("setting", setting);
  }
};

export default validateValueInput;
