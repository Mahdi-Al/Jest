const getAverage = require("./1-getAverage");

describe("test get average ", () => {
  test("should be greater than 5", () => {
    const result = getAverage(6, 7, 6);

    expect(result).toBeGreaterThan(5);
  });
  test("should be less than 5", () => {
    const result = getAverage(2, 3, 4);

    expect(result).toBeLessThan(5);
  });
  test("should be equal 5", () => {
    const result = getAverage(4, 5, 6);

    expect(result).toBe(5);
  });
});
