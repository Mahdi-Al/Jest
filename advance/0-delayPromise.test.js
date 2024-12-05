const getUserWithDelay = require("./0-delayPromise.js"); // Adjust the path as necessary

describe("getUser WithDelay", () => {
  test("should return user object after a delay", async () => {
    const userId = 1;
    const startTime = Date.now(); // Record the start time

    const user = await getUserWithDelay(userId); // Call the async function

    const endTime = Date.now(); // Record the end time
    const duration = endTime - startTime; // Calculate the duration

    // Check that the user object is returned correctly
    await expect(user).toEqual({ id: userId, name: `User ${userId}` });

    // Check that the duration is at least 1000 milliseconds
    expect(duration).toBeGreaterThanOrEqual(1000);
  });
});
