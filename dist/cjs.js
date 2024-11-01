'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A simple decimal identifier generator
 * @function
 * @param {number} size 
 * @returns {number|string} - decimal identifier or error message
 */
function index (size = 10) {
  if (size <= 0 || size > 20) {
    return "Invalid size";
  }
  let numericId = "";
  for (let i = 0; i < size; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    while (i === 0 && randomNumber === 0) {
      randomNumber = Math.floor(Math.random() * 10);
    }
    numericId += randomNumber.toString();
  }
  return parseInt(numericId, 10);
}

exports.default = index;
//# sourceMappingURL=cjs.js.map
