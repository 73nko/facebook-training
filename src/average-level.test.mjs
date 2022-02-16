import { getAverage, createTree } from "./average-level.mjs";

describe("getAverage", () => {
  it("should return the average of the nodes on each level", () => {
    const root = createTree();
    const res = getAverage(root);
    expect(res).toEqual([4, 8, 6, 6, 2]);
  });
});
