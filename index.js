const head   = require("./head");
const tail   = require("./tail");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const without = require("./without");
const flatten = require("./flatten");

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without,
  flatten
};