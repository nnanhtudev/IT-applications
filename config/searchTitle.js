"use strict";
import { getFromStorage } from "../scripts/storage.js";

let search = getFromStorage("search") || [{ title: "apple" }];

(function () {
  if (!Array.isArray(search)) {
    try {
      let searchParse = JSON.parse(search);
      search = searchParse;
      return search;
    } catch (error) {
      console.log(error);
    }
  }
})();
export default search;
