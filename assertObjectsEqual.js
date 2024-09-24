const eqObjects = require("./eqObjects");

// The assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: '2' };

console.log('Test 1: Should pass');
assertObjectsEqual(obj1, obj2); // Expected to pass

console.log('Test 2: Should fail');
assertObjectsEqual(obj1, obj3); // Expected to fail

// Add more test cases as needed
module.exports = assertObjectsEqual;