"use strict";
import search from "../../config/searchTitle.js";
import { saveToStorage } from "../../scripts/storage.js";
import renderSearch from "../../scripts/components/renderSearch.js";
const inputQuery = document.querySelector("#input-query");

export const renderSearchInput = () => {
  inputQuery.value = search[0].title || "";
};

const getInputSearch = () => {
  return inputQuery.value;
};
const updateInputSearch = (inputValue) => {
  // Nhận giá trị inputValue làm tham số
  if (search.length > 0) {
    search[0].title = inputValue; // Cập nhật giá trị title
    saveToStorage("search", search);
  }
};
const validateInputSearch = () => {
  const inputValue = getInputSearch();
  if (inputValue === "") {
    alert("Please select a search");
  }
  updateInputSearch(inputValue);
  renderSearchInput();
  renderSearch();
};

export default validateInputSearch;
