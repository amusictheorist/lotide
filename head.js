const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  } else {
  return arr[0];}
};

// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
assertEqual(head([1]), 1); // Edge case: Single element array
assertEqual(head([]), undefined); // Edge case: Empty array
assertEqual(head(), undefined); // Edge case: No array provided