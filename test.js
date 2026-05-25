const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { calculateNumbers } = require("./function.js");

describe("calculateNumbers", () => {
  it("should return max, min, average of an array", () => {
    const numbers = [20, 11, 10, 20, 30, 40];
    assert.equal(typeof calculateNumbers(numbers), "object");
  });
  it("should error when parameters is not array", () => {
    const numbers = { name: "bebas" };
    assert.throws(() => calculateNumbers(numbers), {
      message: "Input harus berupa array",
    });
  });
  it("should error when array is empty", () => {
    const numbers = [];
    assert.throws(() => calculateNumbers(numbers), {
      message: "Array kosong",
    });
  });
  it("should error when element of array is not a number", () => {
    const numbers = [""];
    assert.throws(() => calculateNumbers(numbers), {
      message: "Input harus berupa angka",
    });
  });
});
