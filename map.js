const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["some", "worldviews", "are", "spacious"];
const words3 = ["some", "are", "merely", "spaced"];

const actual1 = map(words1, (word) => word[0]);
const actual2 = map(words2, (word) => word[1]);
const actual3 = map(words3, (word) => word[2]);

const expected1 = ["g", "c", "t", "m", "t"];
const expected2 = ["o", "o", "r", "p"];
const expected3 = ["m", "e", "r", "a"];

assertArraysEqual(actual1, expected1);
assertArraysEqual(actual2, expected2);
assertArraysEqual(actual3, expected3);