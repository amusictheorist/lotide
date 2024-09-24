const findKey = require("../findKey");

const restaurants =   {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const actual1 = findKey(restaurants, value => value.stars === 2);
const expected1 = "noma";

const actual2 = findKey(restaurants, value => value.stars === 3);
const expected2 = "Akaleri";

assertEqual(actual1, expected1);
assertEqual(actual2, expected2);