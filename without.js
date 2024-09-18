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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Comparison Passed: arrays are identical`);
  } else {
    console.log(`❌❌❌ Comparison Failed: arrays are not identical`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i])
      newArray.push(source[i]);
  }
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
console.log(without([1, 2, 3], [1, 2])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

console.log(assertArraysEqual(words, without(words, "lighthouse")));