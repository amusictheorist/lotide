const assert = require('chai').assert;
const tail = require("../tail");
const assertEqual = require("../assertEqual");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['5'] for ['4', '5']", () => {
    assert.strictEqual(tail(['4', '5']), ['5']); 
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
  });