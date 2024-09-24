const map = require("../map");

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