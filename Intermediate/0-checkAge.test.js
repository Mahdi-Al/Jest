const checkAge = require("./0-checkAge");
describe(" test checkAge function", () => {
  test("should be undefined", () => {
    const result = checkAge(17);
    expect(result).toBeUndefined();
  });
  test("should be defined", () => {
    const result = checkAge(20);
    expect(result).toBeDefined(); // * also you can use in this test `not.toBeUndefined()`
  });
});
