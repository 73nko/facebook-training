import { countSubarrays } from "./contiguous-subarrays";

describe("contiguous-subarrays", () => {
  it("should return the number of subarrays", () => {
    const test = [3, 4, 1, 6, 2];
    const expected = [1, 3, 1, 5, 1];
    const output = countSubarrays(test);

    expect(output).toEqual(expected);
  });

  it("should return the number of subarrays", () => {
    const test = [2, 4, 7, 1, 5, 3];
    const expected = [1, 2, 6, 1, 3, 1];
    const output = countSubarrays(test);

    expect(output).toEqual(expected);
  });
});
