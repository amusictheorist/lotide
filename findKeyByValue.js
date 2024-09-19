const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
const result2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
const result3 = findKeyByValue(bestTVShowsByGenre, "The Expanse");

assertEqual(result1, "drama");
assertEqual(result2, "comedy");
assertEqual(result3, "sci_fi");