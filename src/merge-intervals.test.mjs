import { merge } from "./merge-intervals.mjs";

describe("merge", () => {
  it("should return an empty array if no intervals are given", () => {
    expect(merge([])).toEqual([]);
  });

  it("should return the same array if only one interval is given", () => {
    expect(merge([[1, 2]])).toEqual([[1, 2]]);
  });

  it("should merge two intervals", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
      ])
    ).toEqual([[1, 6]]);
  });

  it("should merge intervals", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
});
