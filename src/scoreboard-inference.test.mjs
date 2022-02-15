import { getMinProblemCount } from "./scoreboard-inference.mjs";

describe("getMinProblemCount", () => {
  it("should return the correct value", () => {
    const output = getMinProblemCount(6, [1, 2, 3, 4, 5, 6]);

    expect(output).toEqual(4);
  });

  it("should return the correct value", () => {
    const output = getMinProblemCount(4, [4, 3, 3, 4]);

    expect(output).toEqual(3);
  });

  it("should return the correct value", () => {
    const output = getMinProblemCount(4, [2, 4, 6, 8]);

    expect(output).toEqual(4);
  });
});
