"use strict";

import { getFromStorage } from "../storage";

const jsonParent = (key, value) => {
  if (key.length > 0) {
    try {
      let key = JSON.parse(getFromStorage(value));
      value = key;
      return key;
    } catch (e) {
      console.log(e);
    }
  }
};

export default jsonParent;
