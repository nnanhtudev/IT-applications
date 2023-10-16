"use strict";

import { getFromStorage } from "../scripts/storage.js";

let setting = getFromStorage("setting") || [];

(function () {
  if (setting.length !== 0) {
    try {
      let storeSettings = JSON.parse(setting);
      setting = storeSettings;
    } catch (e) {
      console.log("Setting parsing error", e);
    }
  }
})();

export default setting;
