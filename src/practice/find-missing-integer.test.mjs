import { findMissingInteger } from "./find-missing-integer.mjs";

describe("Find Missing integer", () => {
  it("Should return the first missing positive integer", () => {
    const input = [3, 4, -1, 1];

    expect(findMissingInteger(input)).toEqual(2);
  });

  it("Should return the first missing positive integer", () => {
    const input = [1, 2, 0];

    expect(findMissingInteger(input)).toEqual(3);
  });
});
