import { getMaximumEatenDishCount } from "./kaitenzushi.mjs";

describe("getMaximumEatenDishCount", () => {
  it("Returns the maximum number of dishes that can be eaten", () => {
    const output = getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1);

    expect(output).toBe(5);
  });

  it("Returns the maximum number of dishes that can be eaten", () => {
    const output = getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2);

    expect(output).toBe(4);
  });

  it("Returns the maximum number of dishes that can be eaten", () => {
    const output = getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2);

    expect(output).toBe(2);
  });
});
