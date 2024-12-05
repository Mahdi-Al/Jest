const fetchUser = require("./1-fetchUserData");
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 1, name: "John Doe" }),
  })
);
describe("fetchUser Data", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch user data successfully", async () => {
    const userId = 1;
    const data = await fetchUser(userId);

    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    expect(data).toEqual({ id: 1, name: "John Doe" });
  });

  it("should handle fetch errors", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Fetch failed"))
    );

    await expect(fetchUser(1)).rejects.toThrow("Fetch failed");
  });
});
