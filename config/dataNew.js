"use strict";
import { getFromStorage } from "../scripts/storage.js";

const newsArr = getFromStorage("newsArr") || [];

export default newsArr;
