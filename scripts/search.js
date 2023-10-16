"use strict";
import validateInputSearch from "../controllers/Search/searchController.js";
import renderSearch from "./components/renderSearch.js";
import { renderSearchInput } from "../controllers/Search/searchController.js";
import { updatePaginationSearch } from "./components/renderSearch.js";
const btnSubmit = document.querySelector("#btn-submit");

updatePaginationSearch();
renderSearchInput();
renderSearch();
btnSubmit.addEventListener("click", () => {
  validateInputSearch();
  location.href = location.href;
});
