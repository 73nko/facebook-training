import { getMaxAdditionalDinersCount } from "./cafeteria.mjs";

describe("getMaxAdditionalDinersCount", () => {
  it("should return the sum of two numbers", () => {
    const result = getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]);

    console.log({ result });
    expect(result).toBe(1);
  });
});
