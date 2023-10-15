"use strict";
import setting from "../../config/configSettingNewPG.js";
import currentUser from "../../config/dataUser.js";

const apiKey = "6bcc40100c94445297fd54d38ac8e470";
const API = [
  {
    category: "general",
    pageSize: 5,
  },
];
let country = "US";
export let page = 1;

// Initialize urlAPI with default values
let urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${API[0].category}&pageSize=${API[0].pageSize}&page=${page}&apiKey=${apiKey}`;

let settings = setting.find((user) => user.ownerST === (currentUser[0] ? currentUser[0].user : null));

const checkSettingsUrlAPI = () => {
  if (settings === undefined) {
    // Use the default values for URL
    urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${API[0].category}&pageSize=${API[0].pageSize}&page=${page}&apiKey=${apiKey}`;
  } else {
    // Use values from the settings array
    urlAPI = `https://newsapi.org/v2/top-headlines?country=${country}&category=${settings.categoryST}&pageSize=${settings.pageSizeST}&page=${page}&apiKey=${apiKey}`;
  }
  return urlAPI;
};

const getUrlAPI = async () => {
  console.log(checkSettingsUrlAPI());
  try {
    const response = await fetch(checkSettingsUrlAPI());
    if (!response.ok) {
      throw new Error(`Http request error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getUrlAPI;
