# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @amusictheorist/lotide`

**Require it:**

`const _ = require('@amusictheorist/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: returns the head of an array (index [0])
- `tail(...)`: returns the tail of an array (everything except index [0])
- `middle(...)`: returns the middle of an array; if array has an even length, it returns the two middle indices, if it has an odd length, it returns the middle index
- `assertEqual(...)`: an assertion function to write tests
- `eqArrays(...)`: a function that checks whether the contents of two arrays are identical or not
- `assertArraysEqual(...)`: an assertion function to test whether the content of two arrays is identical or not
- `eqObjects(...)`: a function that checks whether the contents of two objects are identical or not
- `assertObjectsEqual(...)`: an assertion function to test whether the content of two objects is identical or not
- `countLetters(...)`: lists each letter in a string and how many times it occurs in the string, ignoring spaces
- `countOnly(...)`: counts how many times a given element appears in an array
- `findKey(...)`: finds the key in an object that matches the specified input
- `findKeyByValue(...)`: finds the key in an object that matches a specified value
- `letterPositions(...)`: returns an array listing the indices in which a specified letter within a string is found
- `takeUntil(...)`: returns the elements of a given array until it finds a falsey value
- `without(...)`: compares the elements of two arrays and returns the elements not found in both arrays
- `flatten(...)`: takes an array with nested arrays (only one level down) and returns the same elements in the same order without nested arrays