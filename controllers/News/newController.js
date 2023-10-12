"use strict";
import getUrlAPI from "../../../controllers/APIController.js";
import newsArr from "../../config/dataNew.js";
import { saveToStorage } from "../../scripts/storage.js";
const getArticles = async () => {
  try {
    const data = await getUrlAPI();
    console.log(data);
    if (!data) {
      throw new Error("Cannot getArticles");
    }
    const spliceData = data.splice(0, 5);
    const convertData = spliceData.map((item) => {
      return {
        title: item.title,
        description: item.description,
        url: item.url,
        urlToImage: item.urlToImage,
      };
    });
    return convertData;
  } catch (error) {
    console.log(error);
  }
};

const createGetNewsData = async () => {
  try {
    const dataNew = await getArticles();
    if (!dataNew) {
      throw new Error("No articles");
    }
    newsArr.push(dataNew);
    saveToStorage("newsArr", newsArr);
    console.log(newsArr);
  } catch (error) {
    console.log(error);
  }
};

export default createGetNewsData();
