import { getMinCodeEntryTime } from "./rotary-lock.mjs";

describe("getMinCodeEntryTime", () => {
  it("Returns the minimum time to enter the code", () => {
    const output = getMinCodeEntryTime(3, 3, [1, 2, 3]);

    expect(output).toBe(2);
  });

  it("Returns the minimum time to enter the code", () => {
    const output = getMinCodeEntryTime(10, 4, [9, 4, 4, 8]);

    expect(output).toBe(11);
  });
});
