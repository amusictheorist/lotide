const assertEqual = require("./assertEqual");

const tail = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr.slice(1);
};

module.exports = tail;

console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([1, 2, 3]));