"use strict";
import search from "../../config/searchTitle.js";
import setting from "../../config/configSettingNewPG.js";
import currentUser from "../../config/dataUser.js";
import apiKey from "../../config/apiKey.js";
import { page } from "../../scripts/components/renderNews.js";
import { pageSearch } from "../../scripts/components/renderSearch.js";
const API = [
  {
    category: "general",
    pageSize: 5,
  },
];

let country = "US";

// Initialize urlAPI with default values

let settings = setting.find((user) => user.ownerST === (currentUser[0] ? currentUser[0].user : null));

const checkSettingsUrlAPI = (page) => {
  let urlAPI;
  if (settings === undefined) {
    // Use the default values for URL
    urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${API[0].category}&pageSize=${API[0].pageSize}&page=${page}&apiKey=${apiKey}`;
  } else {
    // Use values from the settings array
    urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${settings.categoryST}&pageSize=${settings.pageSizeST}&page=${page}&apiKey=${apiKey}`;
  }
  return urlAPI;
};

export const getUrlAPI = async () => {
  try {
    const response = await fetch(checkSettingsUrlAPI(page));
    if (!response.ok) {
      throw new Error(`Http request error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const checkURLSearch = (pageSearch) => {
  let URLSearch;
  if (settings === undefined) {
    URLSearch = `https://newsapi.org/v2/everything?q=${search[0].title}&pageSize=${API[0].pageSize}&page=${pageSearch}&apiKey=${apiKey}`;
  } else {
    URLSearch = `https://newsapi.org/v2/everything?q=${search[0].title}&pageSize=${settings.pageSizeST}&page=${pageSearch}&apiKey=${apiKey}`;
  }
  return URLSearch;
};

export const getUrlAPISearch = async () => {
  try {
    const response = await fetch(checkURLSearch(pageSearch));
    if (!response.ok) {
      throw new Error(`Http request error: ${response.status}`);
    }
    const dataSearch = await response.json();
    return dataSearch;
  } catch (error) {
    console.error(error);
  }
};
