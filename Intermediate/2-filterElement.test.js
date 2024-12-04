const filterElement = require("./2-filterElement");
describe("test filterElement function", () => {
  test("should be []", () => {
    const result = filterElement([], "grape");
    expect(result).toEqual([]);
  });
  test('should ["apple"]', () => {
    const result = filterElement(["apple"], "apple");
    expect(result).toEqual(["apple"]);
  });
});
