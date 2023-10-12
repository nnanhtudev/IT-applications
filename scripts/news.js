"use strict";
import renderNews from "./components/renderNews.js";
import newsArr from "../config/dataNew.js";
import { getFromStorage } from "./storage.js";

const render = async () => {
  try {
    if (Array.isArray(newsArr)) {
      throw new Error("newsArr === []");
    }
    let newsArrParse = await JSON.parse(getFromStorage("newsArr"));
    console.log(newsArrParse);
    renderNews(newsArrParse);
  } catch (e) {
    console.log(Error, e);
  }
};

render();
