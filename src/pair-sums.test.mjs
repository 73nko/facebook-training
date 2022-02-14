import { numberOfWays } from "./pair-sums.mjs";

describe("numberOfWays", () => {
  it("should return correct number of ways", () => {
    const k = 6;
    const arr = [1, 2, 3, 4, 3];
    const expected = 2;
    const output = numberOfWays(arr, k);
    expect(output).toBe(expected);
  });

  it("should return correct number of ways", () => {
    const k = 6;
    const arr = [1, 5, 3, 3, 3];
    const expected = 4;
    const output = numberOfWays(arr, k);
    expect(output).toBe(expected);
  });
});
