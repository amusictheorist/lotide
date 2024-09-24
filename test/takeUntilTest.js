const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const actual1 = takeUntil(data1, x => x < 0);
const expected1 = [1, 2, 5, 7, 2];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const actual2 = takeUntil(data2, x => x === ',');
const expected2 = ["I've", "been", "to", "Hollywood"];

assertArraysEqual(actual1, expected1);
assertArraysEqual(actual2, expected2);