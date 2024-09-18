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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let isAMatch = false;
    for (j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isAMatch = true;
      }
    }
    if (isAMatch === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

const actual = without([1, 2, 3], [1, 2]);
const expected = [5];
assertArraysEqual(actual, expected);
// console.log(without([1, 2, 3], [1, 2]));
// console.log(without(["1", "2", "3"], ["3", 1, 2]));

