const simpleSum = require("./1-sum");

describe("sum function", () => {
  test("result 2 + 2 to equal 4", () => {
    const result = simpleSum(2, 2);
    expect(result).toBe(4);
  });
  test("result 2 + (-2) to equal 0", () => {
    const result = simpleSum(2, -2);
    expect(result).toBe(0);
  });
});
