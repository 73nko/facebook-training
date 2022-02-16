import { areTheyEqual } from "./reverse-to-make-equal.mjs";

describe("areTheyEqual", () => {
  it("should return true if the arrays are equal", () => {
    expect(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2])).toBe(true);
  });

  it("should return true if the arrays are equal", () => {
    expect(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 3])).toBe(false);
  });
});
