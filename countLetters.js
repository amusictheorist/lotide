const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let results = {};
  for (const letter of str) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const actual1 = "LHL";
const expected1 = { L: 2, H: 1 };

const actual2 = "lighthouse in the house";
const expected2 = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

const result1 = countLetters("LHL");
const result2 = countLetters("lighthouse in the house");

assertEqual(expected1, result1);
assertEqual(expected2, result2);