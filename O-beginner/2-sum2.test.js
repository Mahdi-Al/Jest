const sum = require("./2-sum2");

describe("sum function", () => {
  test("adds two number correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, -2)).toBe(1);
  });
  test("should throws TypeError if any input is not a number", () => {
    expect(() => sum("2", 2)).toThrow(TypeError);
    expect(() => sum("2", 3)).toThrow("Input must be numbers");
  });
});
