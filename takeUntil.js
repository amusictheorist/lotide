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

const takeUntil = function(array, callback) {
  let newArr = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const actual1 = takeUntil(data1, x => x < 0);
const expected1 = [1, 2, 5, 7, 2];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const actual2 = takeUntil(data2, x => x === ',');
const expected2 = ["I've", "been", "to", "Hollywood"];

assertArraysEqual(actual1, expected1);
assertArraysEqual(actual2, expected2);