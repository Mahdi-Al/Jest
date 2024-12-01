const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");
describe("first", () => {
  test("test truthy values", () => {
    expect(isTruthyOrFalsy("Hello")).toBe(true);
  });
  test("test falsy values", () => {
    expect(isTruthyOrFalsy(0)).toBe(false);
  });
});
