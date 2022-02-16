import { findSignatureCounts } from "./passing-yearbooks.mjs";

describe("findSignatureCounts", () => {
  it("should return an array with the correct signature counts", () => {
    const output = findSignatureCounts([1, 2]);

    expect(output).toEqual([1, 1]);
  });

  it("should return an array with the correct signature counts", () => {
    const output = findSignatureCounts([2, 1]);

    expect(output).toEqual([2, 2]);
  });
});
