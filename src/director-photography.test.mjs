import { getArtisticPhotographCount } from "./director-photography.mjs";

describe("getArtisticPhotographCount", () => {
  test("should return the correct values test 1", () => {
    const returnedValue = getArtisticPhotographCount(5, "APABA", 1, 2);
    const result = 1;

    expect(returnedValue).toBe(result);
  });

  test("should return the correct values test 2", () => {
    const returnedValue = getArtisticPhotographCount(5, "APABA", 2, 3);
    const result = 0;

    expect(returnedValue).toBe(result);
  });

  test("should return the correct values test 3", () => {
    const returnedValue = getArtisticPhotographCount(8, ".PBAAP.B", 1, 3);
    const result = 3;

    expect(returnedValue).toBe(result);
  });
});
