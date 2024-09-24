const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let arrTail = arr
  if (arrTail.length <= 1) {
    return [];
  }
  return arrTail.slice(1);
};

module.exports = tail;

assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([1, 2, 3]).length, 2);
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);