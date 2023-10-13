"use strict";

import { getFromStorage } from "../scripts/storage.js";

let todoArr = getFromStorage("todoArr") || [];

export default todoArr;
