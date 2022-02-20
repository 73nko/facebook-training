import { findDuplicate } from "./find-duplicate.mjs";

describe("findDuplicate", () => {
  it("should return the duplicate number", () => {
    const input = [8, 2, 4, 3, 5, 6, 7, 8, 1, 9];
    const output = findDuplicate(10, input);

    expect(output).toBe(8);
  });
});
