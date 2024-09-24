const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("should return 'Rush' when passed  1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});


assertEqual("Rush", "Rush");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(13, 17);

