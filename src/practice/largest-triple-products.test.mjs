import { findMaxProduct } from "./largest-triple-products.mjs";

describe("Largest Triple Products", () => {
  test("should return a list of integers", () => {
    const input = [1, 2, 3, 4, 5];

    expect(findMaxProduct(input)).toEqual([-1, -1, 6, 24, 60]);
  });

  test("should return a list of integers", () => {
    const input = [2, 1, 2, 1, 2];

    expect(findMaxProduct(input)).toEqual([-1, -1, 4, 4, 8]);
  });

  test("should return a list of integers", () => {
    const input = [2, 4, 7, 1, 5, 3];

    expect(findMaxProduct(input)).toEqual([-1, -1, 56, 56, 140, 140]);
  });
});
