const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const midIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 1) {
    return [array[midIndex]];
  } else {
    return [array[midIndex - 1], array[midIndex]];
  }
};

module.exports = middle;

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);